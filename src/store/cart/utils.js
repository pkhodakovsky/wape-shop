export function filterCart(cart) {
  return cart.filter(({ count }) => Boolean(count));
}

export function saveCart(cart) {
  localStorage.setItem('royal-vape-cart', JSON.stringify(filterCart(cart)));
}
