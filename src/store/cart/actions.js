export default {
  addItem({ state, commit }, payload) {
    const cart = state.items;
    const existItemIndex = cart.findIndex(({ id }) => id === payload.id);
    if (existItemIndex !== -1) {
      commit('updateCartItem', {
        index: existItemIndex,
        count: cart[existItemIndex].count += payload.count,
      });
    } else {
      const { id, count, type } = payload;
      commit('updateCart', {
        id,
        count,
        type,
      });
    }
    commit('saveCart');
  },
  updateItem({ state, commit }, payload) {
    const existItemIndex = state.items.findIndex(({ id }) => id === payload.id);
    commit('updateCartItem', {
      index: existItemIndex,
      count: payload.count,
    });
    commit('saveCart');
  },
  removeItem({ state, commit }, payload) {
    const index = state.items.findIndex(({ id }) => id === payload.id);
    if (index !== -1) {
      commit('removeItem', { index });
    }
    commit('saveCart');
  },
};
