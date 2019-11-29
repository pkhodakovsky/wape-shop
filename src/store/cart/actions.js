export default {
  addItem({ state, rootState, commit }, payload) {
    const cart = Object.assign([], state.items);
    const existItem = cart.find(({ id }) => id === payload.id);
    if (existItem) {
      existItem.count += payload.count;
    } else {
      const newItem = Object.assign(rootState.shopItems.items.find(({ id }) => id === payload.id));
      cart.push(Object.assign(newItem, { count: payload.count }));
    }
    commit('setCart', cart);
  },
  removeItem() {},
};
