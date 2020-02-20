<template>
  <component :is="item.type"></component>
</template>

<script>
import LiquidTypes from './LiquidTypes';
import SelfMixingTypes from './SelfMixingTypes';
import OtherTypes from './OtherTypes';

export default {
  name: 'CartItemType',
  components: {
    liquid: LiquidTypes,
    selfMixinig: SelfMixingTypes,
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
