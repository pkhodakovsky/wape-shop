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
    commit('setCart', { cart, filter: true });
  },
  updateItem({ state, commit }, payload) {
    const cart = Object.assign([], state.items);
    const existItem = cart.find(({ id }) => id === payload.id);
    existItem.count = payload.count;
    commit('setCart', { cart });
  },
  removeItem({ state, commit }, payload) {
    const cart = Object.assign([], state.items);
    const indexExist = cart.findIndex(({ id }) => id === payload.id);
    if (indexExist !== -1) {
      commit('setCart', { cart: cart.slice(0, indexExist) });
    }
  },
};
