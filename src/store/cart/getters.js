export default {
  amount: state => state.items.reduce((amount, { cost, count }) => (amount + (cost * count)), 0),
};
