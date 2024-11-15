let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}



    // Add to Cart Functionality
    function addToCart(productName, productPrice, productImage) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ name: productName, price: productPrice, image: productImage });
        localStorage.setItem('cart', JSON.stringify(cart));
        document.getElementById('cart-count').innerText = `(${cart.length})`;
        alert(`${productName} has been added to your cart.`);
    
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
