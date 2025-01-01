const productsCards = document.getElementById('cybermonday-cards-index');

// Función para truncar texto
function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

fetch('products.json')
.then(response => response.json())
.then(data => {
    const products = Object.values(data);
    const randomItems = products.sort(() => Math.random() - 0.5).slice(0, 4);
    console.log(randomItems);
    randomItems.forEach(product => {
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