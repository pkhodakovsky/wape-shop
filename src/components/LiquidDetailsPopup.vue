<template>
  <div class="popup" v-if="isOpened">
    <div class="close-popup" @click="closePopup">Close</div>
    <div class="add-to-cart" @click="addItem({ id: 'wildWest_cowboyGirl' })">
      Добавить в корзину
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'LiquidDetailsPopup',
  computed: {
    ...mapState('liquidDetails', ['isOpened', 'id']),
  },
  methods: {
    ...mapMutations('liquidDetails', ['closePopup']),
    ...mapMutations('cart', ['addItem']),
  },
};
</script>

<style scoped>
  .popup {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
  }
  .add-to-cart {
    width: 100%;
    background-color: grey;
    padding: 5px 0;
    border-radius: 10px;
    text-align: center;
  }
</style>
