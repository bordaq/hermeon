const productsCards = document.getElementById('cybermonday-cards-index');
const categoriesCards = document.getElementById('categories-index-cards');

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

//Categorías
fetch('categories.json')
.then(response => response.json())
.then(data => {
    const categories = Object.values(data);
    categories.forEach(category => {
        const a = document.createElement('a');
        a.classList.add('categorie-card');
        a.classList.add(ColorsBucle());
        a.setAttribute('href', `products.html?category=${category.id}`);
        a.innerHTML = `
            <div class="categorie-content">
                        <h3>${category.title}</h3>
                        <img src="${category.image}" alt="">
                    </div>
        `;
        categoriesCards.appendChild(a);
    });
})
.catch(error => console.log(error));
const colors = ['red', 'purple', 'cyan', 'green', 'yellow'];
function RandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
let colorNumber = 0;
function ColorsBucle() {
if (colorNumber === colors.length) {
colorNumber = 0;
}
let colorNow = colors[colorNumber];
colorNumber++;
return colorNow;
}
