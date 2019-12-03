export default {
  amount(state) {
    return state.items.reduce((summ, { cost, count }) => (summ + (cost * count)), 0);
  },
};
