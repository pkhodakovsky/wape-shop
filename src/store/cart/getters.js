export default {
  amount(state) {
    return state.items.reduce((summ, { cost, count }) => (summ + (cost * count)), 0);
  },
  idsInCard(state) {
    return state.items.map(({ id }) => id);
  },
};
