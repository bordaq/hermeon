const productsCards = document.getElementById('products-container');

// Función para truncar texto
function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => {
    data.forEach(product => {
        const a = document.createElement('a');
        a.classList.add('product-card');
        a.innerHTML = `
            <div class="product-content">
                <h3>${truncateText(product.title, 40)}</h3> <!-- Trunca el título a 40 caracteres -->
                <img src="${product.image}" alt="">
            </div>
            <div class="product-footer">
                <p class="product-price">$${product.price}</p>
                <div class="product-cart">
                    <img src="img/icons/cart-shopping.svg" alt="">
                </div>
            </div>
        `;
        productsCards.appendChild(a);
    });
})
.catch(error => console.log(error));