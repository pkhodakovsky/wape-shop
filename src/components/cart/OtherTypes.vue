<template>
  <span class="types other">
    <div v-for="(type, index) in item.types" :key="index">
      <span>{{ type.label }}: </span>
      <span>{{ type.value }}</span>
    </div>
  </span>
</template>

<script>
export default {
  name: 'OtherTypes',
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
