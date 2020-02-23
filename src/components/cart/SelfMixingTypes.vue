<template>
  <span class="types self-mixing">
    <div v-for="(type, index) in item.types" :key="index">
      <span>{{ type.label }}: </span>
      <span>{{ type.value }}</span>
    </div>
  </span>
</template>

<script>
export default {
  name: 'SelfMixingTypes',
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
