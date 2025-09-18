const cart = [];
const cartCount = document.querySelector('.cart-count');
const buttons = document.querySelectorAll('.btn-add');

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.product-card');
    const product = {
      id: card.dataset.id,
      name: card.querySelector('h3').textContent,
      price: card.querySelector('.preco').textContent
    };
    cart.push(product);
    cartCount.textContent = cart.length;
    alert(`${product.name} adicionado ao carrinho!`);
  });
});
