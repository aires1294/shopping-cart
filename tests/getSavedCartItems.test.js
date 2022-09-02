const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado;', () => {
    expect.assertions(1);
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });
  test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o cartItems como parâmetro.', () => {
    expect.assertions(1);
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});