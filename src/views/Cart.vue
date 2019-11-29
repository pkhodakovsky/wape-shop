<template>
  <div id="cart">
    <div class="items-wrapper">
      <div class="cart-item" v-for="item in items" :key="item.id">
        <span class="name">{{ item.name }}</span>
        <input type="number" v-model="item.count"
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
  #cart {
    margin-top: 3.25em;
  }
</style>
