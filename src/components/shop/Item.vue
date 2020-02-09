<template>
  <component :is="item.type" :item="item"
             @addItem="addItem"></component>
</template>

<script>
import { mapActions } from 'vuex';

import liquid from '@/components/shop/Liquid.vue';

export default {
  name: 'item',
  components: {
    liquid,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('cart', ['addItem']),
  },
};
</script>
