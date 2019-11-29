export default {
  amount(state) {
    const amount = state.items.reduce((summ, { cost, count }) => (summ + (cost * count)), 0);
    return `${amount.toLocaleString()} грн.`;
  },
};
