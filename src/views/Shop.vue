<template>
  <div class="shop">
    <div class="sort">
      <span class="label">Сортировка:</span>
      <span class="sort-item"
            v-for="item in sortItems"
            :key="item.field"
            :class="{ reverse: item.reverse }"
            @click="sortBy(item)">
        <span class="label">{{ item.name }}</span>
        <svg class="icon" height="12" viewBox="0 0 51 58" width="12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <g fill-rule="nonzero" transform="translate(0 -1)">
              <!-- eslint-disable max-len -->
              <path class="up" d="m25.9969 20h6v33c0 .5522847.4477153 1 1 1h10c.5522847 0 1-.4477153 1-1v-33h6c.3708398.002689.7118642-.2028062.8827573-.5319337s.1427857-.7262873-.0727573-1.0280663l-11.97-17.03c-.1884296-.25921249-.4895366-.41258597-.81-.41258597s-.6215704.15337348-.81.41258597l-3.12 4.42-6.93 9.81-1.98 2.8c-.215543.301779-.2436504.6989388-.0727573 1.0280663s.5119175.5346227.8827573.5319337z"/>
              <!-- eslint-disable max-len -->
              <path class="down" d="m2.1731 44.3575 6.93 9.81 3.12 4.42c.1884555.2591733.4895531.4125159.81.4125159s.6215445-.1533426.81-.4125159l11.97-17.03c.215543-.301779.2436504-.6989388.0727573-1.0280663s-.5119175-.5346227-.8827573-.5319337h-6v-32.9975c0-.55228475-.4477153-1-1-1h-10c-.55228475 0-1 .44771525-1 1v32.9975h-6c-.37083976-.002689-.71186417.2028062-.88275728.5319337-.17089312.3291275-.14278572.7262873.07275728 1.0280663z"/>
            </g>
          </g>
      </svg>
      </span>
    </div>
    <div class="inner">
      <div class="filters">
        <h3 class="label">Фильтры:</h3>
        <div class="name">
          Название:
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
      <transition-group
        class="main" v-if="shownItems.length"
        name="staggered-fade"
        tag="div"
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave">
        <div class="shop-item"
             v-for="(item, index) in shownItems"
             :key="item.id"
             :data-index="index">
          <div class="img">
            <img :src="item.image" :alt="item.name" width="320px" height="auto">
          </div>
          <div class="data">
            <h4 class="name">{{ item.name }}</h4>
            <span class="descr" v-html="item.description"></span><br/>
            <span class="cost">Стоимость: {{ item.cost }} грн.</span>
          </div>
          <div class="add-to-cart">
            <select name="" id="" class="strength">
              <option
                v-for="(itemStrength, index) in item.strength"
                :key="index"
                :selected="index === 0"
                :value="itemStrength">{{ itemStrength }} mg
              </option>
            </select>
            <svg viewBox="0 0 22 2" id="icon-minus" class="minus">
              <path d="M1115.02,480.993a1,1,0,0,1,0-2h20a1,1,0,0,1,0,2h-20Z"
                    transform="translate(-1114 -479)"></path>
            </svg>
            <input class="count" type="number" min="1" max="1000" value="1"/>
            <svg viewBox="0 0 22 22" id="icon-plus" class="plus">
              <path
                d="M1233.02,493.993v-9h-9a1,1,0,0,1,0-2h9v-9a1,1,0,1,1,2,0v9h9a1,1,0,0,1,0,
              2h-9v9A1,1,0,0,1,1233.02,493.993Z"
                transform="translate(-1223 -473)"></path>
            </svg>
            <CartIcon :item="item" @click="addItem({
            id: item.id,
            type: item.strength && item.strength[0],
            count: 1,
          })"></CartIcon>
          </div>
        </div>
      </transition-group>
      <transition name="fade" v-else>
        <div class="main empty">
          <h3 class="no-items">Нет товаров для показа</h3>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate';
import { mapState, mapActions } from 'vuex';

import CartIcon from '@/components/CartIcon.vue';

const DELAY_STEP = 150;
const MAX_DELAY = 1000;

export default {
  name: 'Shop',
  components: {
    CartIcon,
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
    ...mapActions('cart', ['addItem']),
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
  .inner,
  .sort {
    width: 80rem;
    max-width: 95vw;
    margin: 0 auto;
    display: flex;
  }
  .inner {
    min-height: 85vh;
  }
  .sort {
    justify-content: flex-end;
    padding: 0.5em 1em;
    margin-bottom: 1em;
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
    padding: 1em;
  }
  .filters .name {
    color: #fff;
  }
  .filters label:before {
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }
  .main {
    width: 80%;
  }
  .main.empty {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .7);
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
  .add-to-cart {
    position: absolute;
    right: 2em;
    bottom: 1em;
    width: 16em;
    height: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .add-to-cart .strength {
    width: 4em;
    height: 2em;
    padding: 0 .5em;
  }
  .add-to-cart .strength option {
    background-color: #000;
  }
  .add-to-cart .minus,
  .add-to-cart .plus {
    width: 1em;
    height: 1em;
  }
  .add-to-cart .minus,
  .add-to-cart .plus {
    fill: #fff;
  }
  .add-to-cart .count {
    width: 3em;
    height: 1.5em;
    text-align: center;
  }
  .filters,
  .shop-item {
    border-radius: 10px;
  }
  .filters {
    transition: background-color .25s;
  }
  .filters:hover {
    background-color: rgba(0, 0, 0, .7);
  }
  .filters:hover {
    color: #000;
  }
  .shop-item img {
    width: 160px;
  }
  .shop-item .data {
    width: 100%;
    margin: 0 1em;
  }
  .shop-item .data .name {
    font-weight: bold;
    margin: 0;
  }

  @media screen and (max-width: 1023px) {
    .shop-item {
      flex-direction: column;
    }
    .shop-item img {
      width: 320px;
    }
    .shop-item .name,
    .shop-item .cost {
      text-align: center;
    }
    .inner {
      flex-direction: column;
    }
    .filters,
    .main {
      width: 100%;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
  .staggered-fade-move {
    transition: all .15s;
  }
</style>
