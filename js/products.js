import { productArray } from "./productsList.js";
const productsContainer = document.querySelector(".products-img-container");
const cart = document.querySelector(".products-img-container");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];


productArray.forEach(function (product) {
  productsContainer.innerHTML += `
    <div class="product">
    <a href="Product_specific.html"
    ><img
      src="${product.image}"
      alt="${product.name}"
      class="products-img"
  </img></a>
        <h3>${product.name}</h3>
        <div class="product_description">
        <p class="product-price">${product.price},-</p>
        <button class="cta_small" data-product=${product.id}>Add to cart</button>
        </div>
    </div>
    `;
});

const addToCartButtons = document.querySelectorAll("button");
addToCartButtons.forEach(function (button) {
  button.onclick = function (event) {

    const itemToAdd = productArray.find(item => item.id == event.target.dataset.product);
    cartArray.push(itemToAdd);
    showCart(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  };
});


function showCart(cartItems) {
    cart.style.display = "relative"; 
    cartList.innerHTML = "";
    let total = 0;
    cartItems.forEach(function(cartElement){
        total += cartElement.price; 
        cartList.innerHTML += 
        `<div class="cart-item">
        <h4>${cartElement.name}</h4>
        <img src="${cartElement.image}" alt=${cartElement.name}" class="cart-image">
        <div class="checkout_price">Price: ${cartElement.price}</div>
        </div>
        `
    })
    totalContainer.innerHTML = `Total: ${total},-`
    
}

/*inspired by*/
/*https://m.youtube.com/watch?v=dYRgB-0xvdw*/
