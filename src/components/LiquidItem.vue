<template>
  <div class="box">
    <div class="image fit">
      <img :src="image"
           alt="" width="100%" height="auto"/>
    </div>
    <div class="content">
      <header class="align-center">
        <h2 v-html="title"></h2>
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
  props: {
    image: String,
    title: String,
    list: Array,
  },
};
</script>

<style scoped>

</style>
