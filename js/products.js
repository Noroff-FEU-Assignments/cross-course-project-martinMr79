import { productArray } from "./productsList.js";
const productsContainer = document.querySelector(".products-img-container");
let cartArray = [];


productArray.forEach(function (product) {
  productsContainer.innerHTML += `
    <div class="product">
    <a href="Product_specific.html"
    ><img
      src="${product.image}"
      alt="${product.name}"
      class="products-img"
  /></a>
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
   // cartArray.push(event.target.dataset.product);
    const itemToAdd = productArray.find(item => item.id == event.target.dataset.product);
    console.log(itemToAdd);
  };
});

/*inspired by*/
/*https://m.youtube.com/watch?v=dYRgB-0xvdw*/
