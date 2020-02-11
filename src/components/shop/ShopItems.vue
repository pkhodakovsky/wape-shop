<template>
  <vue-scroll class="view" ref="scroll" :ops="scrollOpts" @handle-scroll="onScroll">
    <transition name="fade" mode="out-in">
      <transition-group
        v-if="shownItems.length"
        name="staggered-fade"
        tag="div"
        appear
        ref="transitionGroup"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave">
        <ShopItem class="shop-item"
                  v-for="(item, index) in shownItems"
                  :key="item.id"
                  :data-index="index"
                  :item="item"></ShopItem>
        <div class="button special"
             v-if="canShowMore"
             key="showMore"
             @click="showMore">Показать ещё</div>
      </transition-group>
      <div class="empty" v-else>
        <h3 class="no-items">Нет товаров для показа</h3>
      </div>
    </transition>
  </vue-scroll>
</template>

<script>
import Velocity from 'velocity-animate';

import ShopItem from '@/components/shop/Item.vue';

const DELAY_STEP = 150;
const MAX_DELAY = 1000;

export default {
  name: 'ShopItems',
  components: {
    ShopItem,
  },
  data() {
    return {
      scrollOpts: {
        rail: {
          size: '0px',
          gutterOfSide: '0px',
        },
      },
    };
  },
  props: {
    shownItems: {
      type: Array,
      required: true,
    },
    canShowMore: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    beforeEnter(el) {
      const el2 = el;
      el2.style.opacity = 0;
    },
    enter(el, done) {
      const delay = el.dataset.index * DELAY_STEP;
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 1 },
          { complete: done },
        );
      }, delay > MAX_DELAY ? MAX_DELAY : delay);
    },
    leave(el, done) {
      Velocity(
        el,
        { opacity: 0 },
        { complete: done, duration: 150 },
      );
    },
    onScroll({ process }) {
      if (process > 0.85) {
        this.showMore();
      }
    },
    showMore() {
      this.$emit('showMore');
    },
  },
};
</script>

<style scoped>
  .view .empty {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .75);
  }
  .shop-item {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-bottom: .75em;
    padding: 1em 2em 4em;
    background-color: rgba(0, 0, 0, .75);
    border-radius: 10px;
  }

  @media screen and (max-width: 1023px) {
    .shop-item {
      flex-direction: column;
    }
  }
</style>
