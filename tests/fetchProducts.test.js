require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('deve retornar se a função fetch foi chamada', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  test('Chamar a função fetchProducts com computador como argumento', async () => {
    const fetchComputer = await fetchProducts('computador');
    expect(fetchComputer).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  test('', async () => {
    const fetchComputer = await fetchProducts('computador');
    expect(fetchComputer).toEqual(computadorSearch);    
  });
  test('', async () => {
    const fetchComputer = await fetchProducts();
    expect(fetchComputer).toEqual(new Error('You must provide an url'));
  });
 
});
