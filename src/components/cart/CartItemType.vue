<template>
  <component :is="item.type" :item="item"></component>
</template>

<script>
import LiquidTypes from './LiquidTypes.vue';
import SelfMixingTypes from './SelfMixingTypes.vue';
import OtherTypes from './OtherTypes.vue';

export default {
  name: 'CartItemType',
  components: {
    liquid: LiquidTypes,
    selfMixing: SelfMixingTypes,
    other: OtherTypes,
  },
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
