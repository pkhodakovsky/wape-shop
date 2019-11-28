<template>
  <div class="box">
    <div class="image fit">
      <img :src="image"
           alt="" width="100%" height="auto"/>
    </div>
    <div class="content">
      <header class="align-center">
        <div v-html="title"></div>
      </header>
      <hr/>
      <ul>
        <li v-for="(item, index) in list" :key="index" v-html="item"></li>
      </ul>
    </div>
    <div class="open-popup" @click="openPopup({ id })">Подробнее</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'LiquidItem',
  data() {
    return {
      isOpened: false,
      list: this.getList(),
    };
  },
  props: {
    id: String,
    image: String,
    title: String,
  },
  methods: {
    ...mapMutations('liquidDetails', ['openPopup']),
    getList() {
      return this.$store.state.shopItems.items
        .filter(({ subtype }) => subtype === this.id)
        .map(({ name, description }) => `<b>${name}</b> – ${description}`);
    },
  },
};
</script>

<style scoped>
  .open-popup {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: grey;
    padding: 5px 0;
    border-radius: 10px;
    text-align: center;
  }
</style>
