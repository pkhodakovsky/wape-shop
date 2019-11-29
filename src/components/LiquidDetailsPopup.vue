<template>
  <div class="popup" v-if="isOpened">
    <div class="liquids-wrapper">
      <div class="close-popup" @click="closePopup"></div>
      <div class="liquid" v-for="(liquid, index) in liquids" :key="liquid.id">
        <span class="name">{{ liquid.name }}</span>
        <input type="number" min="0" max="100" v-model="liquidsCount[index]"/>
        <div class="add-to-cart button special"
             @click="addItem({ id: liquid.id, count: +liquidsCount[index] })">
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
    liquidsCount() {
      return this.liquids.map(() => 0);
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
    width: 60%;
    border-radius: 20px;
    box-sizing: border-box;
    border: .5em solid #71b2f0;
    padding: 20px 40px;
    background-color: #fff
  }
  .close-popup {
    position: absolute;
    top: 3px;
    right: 3px;
    width: 32px;
    height: 32px;
    background: url("../../public/images/close-popup.png") center/contain no-repeat;
    cursor: pointer;
  }
  .liquid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
  }
  .liquid .name {
    width: 40%;
    font-size: 16px;
    font-weight: bold;
  }
</style>
