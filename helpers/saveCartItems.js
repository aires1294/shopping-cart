const saveCartItems = (equipamento) => {
  localStorage.setItem('cartItems', equipamento);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
