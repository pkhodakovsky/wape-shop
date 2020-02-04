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
          <div class="add-to-card">
            <CartIcon :item="item" @click="addItem(Object.assign(item, { count: 1 }))"></CartIcon>
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
import { mapState, mapGetters, mapActions } from 'vuex';

import CartIcon from '@/components/CartIcon.vue';

export default {
  name: 'Shop',
  components: {
    CartIcon,
  },
  computed: {
    ...mapState(['shopItems']),
    ...mapGetters('cart', ['idsInCard']),
    checkedCategories() {
      return this.shopItems.types
        .filter(({ checked }) => checked)
        .map(({ id }) => id);
    },
    shownItems() {
      return this.shopItems.items
        .filter(({ type }) => this.checkedCategories.includes(type))
        .map((item) => {
          if (this.idsInCard.includes(item.id)) return Object.assign(item, { isInCart: true });
          return item;
        });
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
    padding: 1em 2em;
    background-color: rgba(0, 0, 0, .75);
  }
  .add-to-card {
    position: absolute;
    right: 2em;
    bottom: 1em;
    width: 2em;
    height: 2em;
    cursor: pointer;
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
