<template>
  <div class="cart">
    <h2>Корзина:</h2>
    <div class="items-wrapper">
      <div class="cart-item" v-for="item in items" :key="item.id">
        <img width="64px" height="64px" :src="item.image" :alt="item.name"/>
        <span class="name">{{ item.name }}</span>
        <input type="number" min="0" max="100" v-model="item.count"
               @change="updateItem({ id: item.id, count: +item.count })"/>
        <span class="item-amount">{{ item.cost * (+item.count) }}</span>
        <div class="remove-item button special" @click="removeItem({ id: item.id })">Удалить</div>
      </div>
    </div>
    <span class="amount">Total: {{ amount }}</span>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart',
  computed: {
    ...mapState('cart', ['items']),
    ...mapGetters('cart', ['amount']),
  },
  methods: {
    ...mapActions('cart', ['updateItem', 'removeItem']),
  },
};
</script>

<style scoped>
  .cart {
    width: 80rem;
    margin: 4.25em auto 0;
  }
</style>
