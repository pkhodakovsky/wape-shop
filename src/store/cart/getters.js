export default {
  amount(state, getters, rootState) {
    const { items } = state;
    const { shopItems } = rootState;
    return items.reduce((amount, { id, count }) => {
      const { cost } = shopItems.items.find(item => item.id === id);
      return amount + (cost * count);
    }, 0);
  },
};
