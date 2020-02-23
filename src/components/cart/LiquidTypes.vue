<template>
  <div class="types liquid">
    <div v-for="(type, index) in item.types" :key="index">
      <span>{{ type.label }}: </span>
      <span>{{ type.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LiquidTypes',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
