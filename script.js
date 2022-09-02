const itensGuardados = document.querySelector('.cart__items');

let localStorageEquipamentos = [];

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addProductCart = async (event) => {
  const idProduct = (event.target.parentNode.firstElementChild.innerText);  
  const itemCarrinho = await fetchItem(idProduct);
  const additemCarrinho = createCartItemElement(itemCarrinho);
  itensGuardados.appendChild(additemCarrinho);
  localStorageEquipamentos.push(itemCarrinho);
  saveCartItems(JSON.stringify(localStorageEquipamentos));
  // console.log(idProduct);  
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const btnCart = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  btnCart.addEventListener('click', addProductCart);
  section.appendChild(btnCart); 

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const montandoProduto = async () => {
  const itemHtml = document.querySelector('.items');
  const pegandoFetch = await fetchProducts('computador');
  const { results } = pegandoFetch;
  // console.log(results);
  results.forEach(({ id, title, thumbnail }) => {
  const item = createProductItemElement({ sku: id, name: title, image: thumbnail });
  itemHtml.appendChild(item);      
  });
};

const emptyCart = () => {
  const removeOl = document.querySelector('.cart__items');
  const filhosLi = removeOl.querySelectorAll('.cart__item');
  // console.log(filhosLi);
  for (let index = 0; index < filhosLi.length; index += 1) {
    filhosLi[index].remove();
  }
};

const button = () => {
  const recuperaButton = document.querySelector('.empty-cart');
  recuperaButton.addEventListener('click', emptyCart);
};

const carregaPagina = (equipamentos) => {
  equipamentos.forEach((equipamento) => {
      const equipamentosCarrega = createCartItemElement(equipamento);
      itensGuardados.appendChild(equipamentosCarrega);
  });
};

// const loading = async () => {
//   const itens = document.querySelector('.items');
//   const element = document.createElement('p');
//   element.innerText = 'carregando...';
//   element.className = 'loading';  
//   itens.appendChild(element);
//   await montandoProduto();
//   itemHtml.firstChild.remove();
// };

window.onload = async () => { 
  await montandoProduto(); 
  // QUANDO EU COLOCO ELA ON, o botao de esvaziar para de funcionar e a pagina n carrega com o carrinho
  // await loading(); 
  button();
  localStorageEquipamentos = JSON.parse(getSavedCartItems('cartItems')) || [];
  carregaPagina(localStorageEquipamentos);
};