<template>
  <component :is="item.type" :item="item"
             @addItem="addItem"></component>
</template>

<script>
import { mapActions } from 'vuex';

import liquid from '@/components/shop/Liquid.vue';
import disposableDevice from '@/components/shop/DisposableDevice.vue';
import selfMixing from '@/components/shop/SelfMixing.vue';
import other from '@/components/shop/Other.vue';

export default {
  name: 'item',
  components: {
    liquid,
    disposableDevice,
    selfMixing,
    other,
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
