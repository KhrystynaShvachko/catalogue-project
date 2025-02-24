let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    document.getElementById('cart-count').textContent = cart.length;
    alert(`${productName} додано до кошика!`);
}

function toggleCart() {
    const cartSection = document.getElementById('cart');
    const cartItems = document.getElementById('cart-items');
    
    cartItems.innerHTML = ''; // Clear current cart items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} грн`;
        cartItems.appendChild(li);
    });
    
    cartSection.style.display = cartSection.style.display === 'none' || cartSection.style.display === '' ? 'block' : 'none';
}

function closeCart() {
    document.getElementById('cart').style.display = 'none';
}
