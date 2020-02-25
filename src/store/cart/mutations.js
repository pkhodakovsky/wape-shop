import { saveCart } from './utils';

export default {
  setCart(state, payload) {
    Object.assign(state, {
      ...payload,
    });
  },
  saveCart(state, newCart) {
    Object.assign(state, newCart);
    saveCart(state);
  },
  updateCart(state, payload) {
    state.items.push(payload);
  },
  updateCartItem(state, { index, count }) {
    state.items[index].count = count;
  },
  removeItem(state, { index }) {
    state.items.splice(index, 1);
  },
  setOrderSuccessStatus(state, payload) {
    state.orderSuccess = payload;
  },
};
