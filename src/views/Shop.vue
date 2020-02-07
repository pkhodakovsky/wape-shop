<template>
  <div class="shop">
    <div class="inner">
      <div class="filters">
        <h3 class="label">Фильтры:</h3>
        <div class="categories">
          <h4 class="filter-label">Категории:</h4>
          <div class="category-item" v-for="(category, index) in shopItems.types" :key="index">
            <input :id="`category${index}`" type="checkbox" v-model="category.checked"/>
            <label :for="`category${index}`">{{ category.name }}</label>
          </div>
        </div>
      </div>
      <div class="main" v-if="shownItems.length">
        <div class="shop-item" v-for="item in shownItems" :key="item.id">
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
      </div>
      <div class="main empty" v-else>
        <h3 class="no-items">Нет товаров для показа</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import CartIcon from '@/components/CartIcon.vue';

export default {
  name: 'Shop',
  components: {
    CartIcon,
  },
  computed: {
    ...mapState(['shopItems']),
    checkedCategories() {
      return this.shopItems.types
        .filter(({ checked }) => checked)
        .map(({ id }) => id);
    },
    shownItems() {
      return this.shopItems.items
        .filter(({ type }) => this.checkedCategories.includes(type));
    },
  },
  methods: {
    ...mapActions('cart', ['addItem']),
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
  .filters {
    width: 20%;
    height: 50%;
    margin-right: 0.5em;
    padding: 1em;
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
  .shop-items {
    transition: box-shadow .25s;
  }
  .filters:hover {
    background-color: rgba(0, 0, 0, .7);
  }
  .shop-item:hover,
  .main.empty:hover {
    box-shadow: 0 0 15px 2px #565656;
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
</style>
