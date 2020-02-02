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
      <div class="main">
        <div class="shop-item" v-for="item in shownItems" :key="item.id">
          <div class="img">
            <img :src="item.image" :alt="item.name" width="150px" height="auto">
          </div>
          <div class="data">
            <h4 class="name">{{ item.name }}</h4>
            <span class="descr" v-html="item.description"></span><br/>
            <span class="cost">Стоимость: {{ item.cost }} грн.</span>
          </div>
          <div class="add-to-card button special"
               @click="addItem(Object.assign(item, { count: 1 }))">Добавить в корзину</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Shop',
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
    margin: 0 auto;
    display: flex;
  }
  .filters {
    margin-right: 2em;
  }
  .shop-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
    padding: 1em 2em;
    background-color: rgba(0, 0, 0, .75);
  }
  .shop-item .data {
    width: 100%;
    margin: 0 1em;
  }
  .shop-item .data .name {
    font-weight: bold;
    margin: 0;
  }
</style>
