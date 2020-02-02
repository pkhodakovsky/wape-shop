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
  </div>
</template>

<script>
export default {
  name: 'LiquidItem',
  data() {
    return {
      list: this.getList(),
    };
  },
  props: {
    id: String,
    image: String,
    title: String,
  },
  methods: {
    getList() {
      return this.$store.state.shopItems.items
        .filter(({ subtype }) => subtype === this.id)
        .map(({ name, description }) => `<b>${name}</b> – ${description}`);
    },
  },
};
</script>
