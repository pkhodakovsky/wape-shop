export default {
  setCart(state, cart) {
    while (state.items.length) {
      state.items.pop();
    }
    Object.assign(state.items, cart);
  },
  removeItem() {},
};
