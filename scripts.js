let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice) {
    // Add product to the cart
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    document.getElementById('cart-count').innerText = `(${cart.length})`;
    alert(`${productName} has been added to your cart.`);
}


// Display initial cart count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = `(${cart.length})`;
}

// Call this function on page load
updateCartCount();
