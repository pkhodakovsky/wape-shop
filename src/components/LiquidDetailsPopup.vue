<template>
  <div class="popup" v-if="isOpened">
    <div class="liquids-wrapper">
      <div class="close-popup" @click="closePopup">Close</div>
      <div class="liquid" v-for="liquid in liquids" :key="liquid.id">
        <span class="name">{{ liquid.name }}</span>
        <input type="number" min="0" max="100" value="0"/>
        <div class="add-to-cart" @click="addItem({ id: liquid.id })">
          Добавить в корзину
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'LiquidDetailsPopup',
  computed: {
    ...mapState('liquidDetails', ['isOpened', 'id']),
    liquids() {
      return this.$store.state.shopItems.items.filter(({ subtype }) => subtype === this.id);
    },
  },
  methods: {
    ...mapMutations('liquidDetails', ['closePopup']),
    ...mapActions('cart', ['addItem']),
  },
};
</script>

<style scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-top: 50px;
    background-color: rgba(0, 0, 0, .75);
    z-index: 10;
  }
  .liquids-wrapper {
    position: relative;
    width: 50%;
    height: 50%;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px 30px;
    background-color: grey;
  }
  .close-popup {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .liquid {
    display: flex;
  }
  .liquid .name {
    width: 40%;
  }
  .add-to-cart {
    background-color: grey;
    padding: 5px 10px;
    border-radius: 10px;
    text-align: center;
  }
</style>
