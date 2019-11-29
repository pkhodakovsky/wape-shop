<template>
  <div id="cart">
    <div class="items-wrapper">
      <div class="cart-item" v-for="item in items" :key="item.id">
        <span class="name">{{ item.name }}</span>
        <input type="number" v-model="item.count"/>
        <span class="item-amount">{{ item.cost * item.count }}</span>
      </div>
    </div>
    <span class="amount">Total: {{ amount }}</span>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Cart',
  computed: {
    ...mapState('cart', ['items']),
    ...mapGetters('cart', ['amount']),
  },
};
</script>

<style scoped>
  #cart {
    margin-top: 3.25em;
  }
</style>
