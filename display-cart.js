function displayCart() {
    const cart = getCart();
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Limpia la lista antes de mostrarla

    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="cart-item">
                <div id=item-info>
                 <img src="${product.image}" alt="${product.title}">
                 <div class="cart-item-details">
                    <h3>${product.title}</h3>
                    <p>$${product.price}</p>
                 </div>
                </div>
                <div id=item-quantity>
                <button id="remove-item" onclick="removeItem('${index}')"><img src="img/icons/minus.svg" alt=""></button>
                <p>${product.quantity}</p>  
                <button id="add-item" onclick="addItem('${index}')"><img src="img/icons/plus.svg" alt=""></button>
                </div>
            </div>
        `;
        cartList.appendChild(li);
    });
    let totalPage = document.getElementById('total-price')
    totalPage.innerHTML = `${calculateTotal() === 0 ? "Carrito vacío! Agrega productos para continuar con la compra." : `Total: $${calculateTotal()}`}`;
}
function removeItem(id) {
    console.log(id);
    const cart = getCart();
    cart[id].quantity = cart[id].quantity - 1;
    if (cart[id].quantity <= 0) {
        cart.splice(id, 1);
    }
    console.log(cart);
    updateCart(cart);
    displayCart();
    updateCartCount();
}
function addItem(id) {
    const cart = getCart();
    cart[id].quantity = cart[id].quantity + 1;
    updateCart(cart);
    displayCart();
    updateCartCount();
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
        total += product.price * product.quantity;
    });
    return total;
}
const total = calculateTotal();

displayCart();