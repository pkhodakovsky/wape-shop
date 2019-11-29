export default function filterCart(cart) {
  return cart.filter(({ count }) => !!+count);
}
