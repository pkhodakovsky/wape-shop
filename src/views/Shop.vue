<template>
  <div class="shop">
    <div class="inner">
      <div class="filters">
        <h3 class="label">Фильтры:</h3>
        <div class="name">
          <h4>Название:</h4>
          <input type="text"
                 @blur="onBlurNameInput"
                 @keypress.enter="onEnterNameInput"/>
        </div>
        <div class="categories">
          <h4 class="filter-label">Категории:</h4>
          <div class="category-item" v-for="(category, index) in shopItems.types" :key="index">
            <input :id="`category${index}`" type="checkbox" v-model="category.checked"/>
            <label :for="`category${index}`">{{ category.name }}</label>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="sort">
          <span class="label">Сортировка:</span>
          <span class="sort-item"
                v-for="item in sortItems"
                :key="item.field"
                :class="{ reverse: item.reverse }"
                @click="sortBy(item)">
          <span class="label">{{ item.name }}</span>
          <svg class="icon" height="12" viewBox="0 0 51 58" width="12"
               xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <g fill-rule="nonzero" transform="translate(0 -1)">
                <!-- eslint-disable max-len -->
                <path class="up"
                      d="m25.9969 20h6v33c0 .5522847.4477153 1 1 1h10c.5522847 0 1-.4477153 1-1v-33h6c.3708398.002689.7118642-.2028062.8827573-.5319337s.1427857-.7262873-.0727573-1.0280663l-11.97-17.03c-.1884296-.25921249-.4895366-.41258597-.81-.41258597s-.6215704.15337348-.81.41258597l-3.12 4.42-6.93 9.81-1.98 2.8c-.215543.301779-.2436504.6989388-.0727573 1.0280663s.5119175.5346227.8827573.5319337z"/>
                <!-- eslint-disable max-len -->
                <path class="down"
                      d="m2.1731 44.3575 6.93 9.81 3.12 4.42c.1884555.2591733.4895531.4125159.81.4125159s.6215445-.1533426.81-.4125159l11.97-17.03c.215543-.301779.2436504-.6989388.0727573-1.0280663s-.5119175-.5346227-.8827573-.5319337h-6v-32.9975c0-.55228475-.4477153-1-1-1h-10c-.55228475 0-1 .44771525-1 1v32.9975h-6c-.37083976-.002689-.71186417.2028062-.88275728.5319337-.17089312.3291275-.14278572.7262873.07275728 1.0280663z"/>
              </g>
            </g>
        </svg>
        </span>
        </div>
        <div class="view">
          <transition name="fade" mode="out-in">
            <transition-group
              v-if="shownItems.length"
              name="staggered-fade"
              tag="div"
              appear
              @before-enter="beforeEnter"
              @enter="enter"
              @leave="leave">
              <ShopItem class="shop-item"
                   v-for="(item, index) in shownItems"
                   :key="item.id"
                   :data-index="index"
                   :item="item"></ShopItem>
            </transition-group>
            <div class="empty" v-else>
              <h3 class="no-items">Нет товаров для показа</h3>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate';
import { mapState } from 'vuex';

import ShopItem from '@/components/shop/Item.vue';

const DELAY_STEP = 150;
const MAX_DELAY = 1000;

export default {
  name: 'Shop',
  components: {
    ShopItem,
  },
  data() {
    return {
      nameQuery: '',
      selectedSort: '',
      sortItems: [
        {
          field: 'name',
          name: 'Название',
          reverse: true,
        },
        {
          field: 'cost',
          name: 'Цена',
          reverse: true,
        },
      ],
    };
  },
  computed: {
    ...mapState(['shopItems']),
    checkedCategories() {
      return this.shopItems.types
        .filter(({ checked }) => checked)
        .map(({ id }) => id);
    },
    shownItems() {
      const { field } = this.selectedSort;
      return this.shopItems.items
        .filter(({ type }) => this.checkedCategories.includes(type))
        .filter(({ name }) => name.toLowerCase()
          .includes(this.nameQuery.toLocaleLowerCase().trim()))
        .sort((a, b) => {
          if (this.selectedSort.reverse) {
            if (a[field] > b[field]) return -1;
            if (a[field] < b[field]) return 1;
          } else {
            if (a[field] < b[field]) return -1;
            if (a[field] > b[field]) return 1;
          }
          return 0;
        });
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
    onBlurNameInput(event) {
      this.updateNameQuery(event.target.value);
    },
    onEnterNameInput(event) {
      this.updateNameQuery(event.target.value);
    },
    updateNameQuery(value) {
      this.nameQuery = value;
    },
    sortBy(sortOptions) {
      this.selectedSort = sortOptions;
      this.selectedSort.reverse = !sortOptions.reverse;
    },
  },
};
</script>

<style scoped>
  .shop {
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 4.25em;
    background-image: url('../../public/images/bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    color: #fff;
  }
  .inner {
    width: 80rem;
    max-width: 95vw;
    min-height: 85vh;
    margin: 0 auto;
    display: flex;
  }
  .sort {
    display: flex;
    justify-content: flex-end;
    padding: .5em 1em;
    margin-bottom: .5em;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .7);
  }
  .sort .label,
  .sort .sort-item {
    margin-right: 0.5em;
  }
  .sort .down {
    fill: #000;
  }
  .sort .up {
    fill: #fff;
  }
  .sort .reverse .down {
    fill: #fff;
  }
  .sort .reverse .up {
    fill: #000;
  }
  .filters {
    width: 20%;
    height: 50%;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
    padding: 1em;
    background-color: rgba(0, 0, 0, .75);
  }
  .filters > div {
    margin-bottom: 1em;
  }
  .filters h4 {
    margin-bottom: .5em;
  }
  .filters .name {
    color: #fff;
  }
  .filters label {
    margin-bottom: .5rem;
  }
  .filters label:before {
    top: 50%;
    transform: translate3d(0, -50%, 0);
    width: 1.2rem;
    height: 1.2rem;
    font-size: .8rem;
    line-height: 1.1rem;
  }
  .main {
    width: 80%;
  }
  .view {
    height: 95%;
  }
  .view .empty {
    min-height: 100%;
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
  }
  .filters,
  .shop-item {
    border-radius: 10px;
  }

  @media screen and (max-width: 1023px) {
    .inner {
      flex-direction: column;
    }
    .filters,
    .main {
      width: 100%;
    }
    .shop-item {
      flex-direction: column;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .15s;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
  .staggered-fade-move {
    transition: all .15s;
  }
</style>
