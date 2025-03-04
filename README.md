# Amazon Clone

An Amazon-like clone project demonstrating a simplified e-commerce interface with basic functionalities using HTML, CSS, and JavaScript. This project includes a homepage with product listings, a working "Add to Cart" feature, a Sign-In page, and a Cart page.

## Project Overview

This project is a prototype of an e-commerce website designed to showcase frontend skills and basic JavaScript functionalities. The clone includes:
- A **homepage** with a header, search bar, product categories, a product slideshow, and product listings with an "Add to Cart" feature.
- A **sign-in page** with a basic form.
- A **cart page** that displays added items and calculates the total price.

## Features

- **Homepage**:
  - Navigation bar with logo, search bar, Sign-In link, and Cart link.
  - Dynamic slideshow of promotional banners.
  - Product listing with individual products that can be added to the cart.
  
- **Sign-In Page**:
  - Basic form for user authentication simulation.
  
- **Cart Page**:
  - Displays items added to the cart.
  - Shows the total price of the items.
  - A checkout button (placeholder for future implementation).
    
### Key Features

- **Responsive Header and Footer**:
  - Includes a navigation bar with the Amazon logo, search bar, cart icon, and sign-in link.
  - Cart icon dynamically displays the number of added items.
  - Sticky footer similar to the actual Amazon site.

- **Dynamic Product Slideshow**:
  - Automatic sliding images showcasing promotions or deals.

- **Product Categories and Listings**:
  - Different sections such as "Today's Deals" and "Electronics" displayed with a darker background below the navigation bar.
  - A total of 9 products displayed on the homepage with name, price, and an "Add to Cart" button.
  
- **Working Add to Cart Functionality**:
  - Each product has an "Add to Cart" button, which adds items to a cart.
  - Cart items are stored using **LocalStorage**.
  - The cart icon in the header dynamically updates with the number of items in the cart.

- **Cart Page**:
  - Displays all the items added to the cart with their names, images, and total price.
  - Allows users to remove items from the cart.

- **Sign-In Page**:
  - Simple form-based sign-in page for user login simulation.
  - Contains the same header and footer as the homepage for a consistent experience.



## Tech Stack

- **HTML**: Structure and layout of the website.
- **CSS**: Styling and appearance of the website.
- **JavaScript**: Adding interactive features such as the slideshow and cart functionality.
- **LocalStorage**: Temporary storage of cart items on the user’s browser.

## How to Use

1. Clone this repository:

   ```bash
   git clone https://github.com/Anshuman-Tripathi-minato/amazon-clone.git
   
## Project Structure

```bash
amazon-india-clone/
│
├── index.html           # Homepage of the Amazon clone
├── signin.html          # Sign-In page
├── cart.html            # Cart page displaying added products
├── styles.css           # CSS file for all the pages
├── scripts.js           # JavaScript file for slideshow, add-to-cart, and cart management
└── images/              # Contains all the image assets for products and slideshow
