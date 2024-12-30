function displayCart() {
    const cart = getCart();
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Limpia la lista antes de mostrarla

    cart.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.title}">
                <div class="cart-item-details">
                    <h3>${product.title}</h3>
                    <p>$${product.price}</p>
                </div>
            </div>
        `;
        cartList.appendChild(li);
    });
    let totalPage = document.getElementById('total-price')
    totalPage.innerHTML = `$${calculateTotal()}`
}
document.getElementById('clear-cart').addEventListener('click', () => {
    localStorage.removeItem('cart');
    displayCart();
    updateCartCount();
});

function calculateTotal() {
    const cart = getCart();
    let total = 0;

    cart.forEach(product => {
        total += product.price;
    });

    return total;
}
const total = calculateTotal();

displayCart();