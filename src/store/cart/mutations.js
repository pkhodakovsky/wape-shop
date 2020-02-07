import { saveCart } from './utils';

export default {
  setCart({ items }, payload) {
    payload.forEach((item) => {
      items.push(item);
    });
  },
  saveCart({ items }) {
    saveCart(items);
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
};
