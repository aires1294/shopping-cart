const fetchProducts = async (computador) => {
  try {
    const getProducts = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
    const resultado = await fetch(getProducts);
    const objetoLoja = await resultado.json();
    return objetoLoja;  
  } catch (error) {
        throw new Error('You must provide an url');
  } 
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
