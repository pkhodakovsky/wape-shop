<template>
  <form class="order" action="order.php" method="post">
    <div class="order-row" v-for="row in formData" :key="row.label">
      <h3>{{ row.label }}</h3>
      <textarea v-if="row.type === 'textarea'"
                :name="row.name"
                cols="100"
                rows="10"
                v-model="row.value"></textarea>
      <input v-else
             :name="row.name"
             :type="row.type"
             v-model="row.value"/>
    </div>
    <input type="hidden"
           name="order"
           v-model="orderText"/>
    <button class="checkout button special"
            type="submit"
            @click="$emit('checkout')">Оформить заказ</button>
  </form>
</template>

<script>
export default {
  name: 'OrderForm',
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      formData: [
        {
          label: 'Имя',
          name: 'name',
          type: 'text',
          value: '',
        },
        {
          label: 'Номер телефона',
          name: 'phone',
          type: 'tel',
          value: '',
        },
        {
          label: 'Адрес доставки',
          name: 'address',
          type: 'textarea',
          value: '',
        },
      ],
    };
  },
  methods: {
    prepareLiquidText(liquid) {
      return [
        `Линейка:\t${liquid.subtypeName}\t`,
        `Название:\t${liquid.name}\t`,
        `Никотин:\t${liquid.type} мг\t`,
        `Количество:\t${liquid.count} шт.\t`,
        `Стоимость:\t${liquid.cost} грн.\t`,
        `Сумма:\t${liquid.count * liquid.cost}\t`,
        '\n',
      ].join('');
    },
    prepareSelfMixingText(selfMixing) {
      return [
        `Название:\t${selfMixing.name}\t`,
        `Количество:\t${selfMixing.count} шт.\t`,
        `Стоимость:\t${selfMixing.cost} грн.\t`,
        `Сумма:\t${selfMixing.count * selfMixing.cost}\t`,
        '\n',
      ].join('');
    },
    prepareOtherText(other) {
      return [
        `Название:\t${other.name}\t`,
        `Количество:\t${other.count} шт.\t`,
        `Стоимость:\t${other.cost} грн.\t`,
        `Сумма:\t${other.count * other.cost}\t`,
        '\n',
      ].join('');
    },
  },
  computed: {
    orderText() {
      return this.cart.map((item) => {
        switch (item.itemType) {
          case 'liquid':
            return this.prepareLiquidText(item);
          case 'selfMixing':
            return this.prepareSelfMixingText(item);
          case 'other':
            return this.prepareOtherText(item);
          default:
            return '';
        }
      }).join('');
    },
  },
};
</script>

<style scoped>
  .order {
    width: 100%;
  }
  .order .order-row {
    display: flex;
    flex-direction: row;
  }
  .order-row h3 {
    width: 20%;
  }
  .order-row input,
  .order-row textarea {
    width: 80%;
  }
  .checkout {
    margin-top: 2em;
  }
</style>
