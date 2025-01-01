const productsCards = document.getElementById('products-container');
const removeFilters = document.getElementById('remove-filters');

// Función para truncar texto
function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}
let filter = false;

const filterInputs = document.querySelectorAll('.filter input[type="radio"]');

filterInputs.forEach((input) => {
  input.addEventListener('change', () => {
    filter = true;
    const selected = document.querySelector('input[type="radio"]:checked + label');
    const idSelected = selected.getAttribute('for');
    cleanProducts();
    fetch('products.json')
.then(response => response.json())
.then(data => {
    filterProducts(data, idSelected).forEach(product => {
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
  });
});

removeFilters.addEventListener('click', () => {
    cleanProducts();
 fetch('products.json')
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
});

fetch('products.json')
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

function filterProducts(products, category){
return products.filter(product => product.category === category);
}
function cleanProducts(){
    productsCards.innerHTML = '';
}

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

if (category) {
    filter = true;
    document.getElementById(category).checked = true;
    fetch('products.json')
.then(response => response.json())
.then(data => {
    cleanProducts();
    filterProducts(data, category).forEach(product => {
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
}