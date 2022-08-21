require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Teste se fetchItem é uma função;', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });

  test('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";', async () => {
    await fetchItem("MLB1615760527");
    expect.assertions(1);
    expect(fetch).toBeCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  });

  test('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada;', async () => {
    await fetchItem("MLB1615760527");
    expect.assertions(1);
    expect(fetch).toBeCalled();
  });



  test('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    const objetoFetch = await fetchItem("MLB1615760527");
    expect.assertions(1);
    expect(objetoFetch).toEqual(item);    
  });

  test('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    expect.assertions(1);
    try {
      await fetchItem();
    } 
    catch (err) {
      expect(err).toEqual(new Error('You must provide an url'));
    }
  });


});


