import { productArray } from "./productsList.js";
const productsContainer = document.querySelector(".products-img-container");

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
        <a href="Product_specific.html" class="cta_small">Add to cart</a>
        </div>
    </div>
    `
});


