import { saveCart } from './utils';

export default {
  setCart({ items }, payload) {
    payload.items.forEach((item) => {
      items.push(item);
    });
  },
  saveCart(state, newCart) {
    state.items = newCart;
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
