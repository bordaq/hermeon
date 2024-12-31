function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart ? cart : [];
}

function updateCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cart = getCart();
    const cartIcon = document.getElementById('cart');
    const cartCount = cart.length;
    cartIcon.innerHTML = `<img src="img/icons/cart-shopping.svg" alt=""> <div id="cart-count"><span>${cartCount}</span></div>`;
}

function addToCart(product) {
    const cart = getCart();
    cart.push(product);
    updateCart(cart);
    updateCartCount();
}


updateCartCount();

// Agregar eventos a los íconos de carrito de cada producto
document.addEventListener('click', (e) => {
    if (e.target.closest('.product-card')) {
        const productCard = e.target.closest('.product-card');
        const productTitle = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        const productImage = productCard.querySelector('img').src;

        const product = {
            title: productTitle,
            price: parseFloat(productPrice.replace('$', '').replace('.', '').replace(',', '.')),
            image: productImage,
        };

        addToCart(product);
    }
});
