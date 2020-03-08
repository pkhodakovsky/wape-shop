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
import { mapGetters } from 'vuex';

import { amount as amountFilter } from '@/utils';

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
    addRow(text) {
      return `<tr>${text}</tr>\r\n`;
    },
    addCell(text) {
      return `<td>${text}</td>\r\n`;
    },
    prepareLiquidText(liquid) {
      const [name, strength] = liquid.types.map(type => `${type.label}: ${type.value}`);
      return ''.concat(this.addCell(`${liquid.name}. ${name}`))
        .concat(this.addCell(strength))
        .concat(this.addCell(`${liquid.count} шт.`))
        .concat(this.addCell(amountFilter(liquid.cost)))
        .concat(this.addCell(amountFilter(liquid.count * liquid.cost)));
    },
    prepareSelfMixingText(selfMixing) {
      let typeString;
      switch (selfMixing.subtype) {
        case 'base':
        case 'nicotine':
          typeString = selfMixing.types.map(type => `${type.label}: ${type.value}`).join('. \n');
          break;
        default:
          typeString = '';
          break;
      }
      return ''.concat(this.addCell(selfMixing.name))
        .concat(this.addCell(typeString))
        .concat(this.addCell(`${selfMixing.count} шт.`))
        .concat(this.addCell(amountFilter(selfMixing.cost, selfMixing.currency)))
        .concat(
          this.addCell(amountFilter(selfMixing.count * selfMixing.cost, selfMixing.currency)),
        );
    },
    prepareOtherText(other) {
      let typeString;
      switch (other.subtype) {
        case 'accum':
          typeString = other.types.map(type => `${type.label}: ${type.value}`).join('. \n');
          break;
        default:
          typeString = '';
          break;
      }
      return ''.concat(this.addCell(other.name))
        .concat(this.addCell(typeString))
        .concat(this.addCell(`${other.count} шт.`))
        .concat(this.addCell(amountFilter(other.cost)))
        .concat(this.addCell(amountFilter(other.count * other.cost)));
    },
  },
  computed: {
    ...mapGetters('cart', ['amount']),
    orderText() {
      const title = this.addRow(
        ''.concat(this.addCell('Название:'))
          .concat(this.addCell('Тип:'))
          .concat(this.addCell('Количество:'))
          .concat(this.addCell('Стоимость:'))
          .concat(this.addCell('Сумма:')),
      );
      const orderTable = this.cart.map((item) => {
        switch (item.type) {
          case 'liquid':
            return this.addRow(this.prepareLiquidText(item));
          case 'selfMixing':
            return this.addRow(this.prepareSelfMixingText(item));
          case 'other':
            return this.addRow(this.prepareOtherText(item));
          default:
            return '';
        }
      }).join('');
      const summString = [
        amountFilter(this.amount.default),
        amountFilter(this.amount.dollars, '$'),
      ].join(' + ');
      const summ = `<tr><td>Сумма заказа:</td><td colspan="4" align="right">${summString}</td></tr>`;
      return `<table border="1">${title}${orderTable}${summ}</table>`;
    },
  },
};
</script>

<style scoped>
  .order {
    width: 100%;
    margin-top: 1em;
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
    padding: 0 1em;
  }
  @media screen and (max-width: 1023px) {
    .order .order-row {
      flex-direction: column;
      margin-bottom: .5em;
    }
    .order-row h3,
    .order-row input,
    .order-row textarea {
      width: 100%;
      margin: 0;
    }
  }
</style>
