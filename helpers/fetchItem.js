const fetchItem = async (id) => {
  try {
    const getId = `https://api.mercadolibre.com/items/${id}`;
    const resultadoId = await fetch(getId);
    const objetoCarrinho = await resultadoId.json();
    return objetoCarrinho;
  } catch (error) {
    throw new Error('You must provide an url');
  }    
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

// const fetchItem = () => {
//   // seu código aqui
// };

// if (typeof module !== 'undefined') {
//   module.exports = {
//     fetchItem,
//   };
// }