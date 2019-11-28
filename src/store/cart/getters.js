export default {
  amount: state => state.items.reduce((amount, { cost }) => (amount + (+cost)), 0),
};
