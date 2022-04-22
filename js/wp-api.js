const baseUrl = "https://www.volumvekt.no/rainydays/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);

  products.forEach(function (product) {
    productContainer.innerHTML += `
    <div class="products">
    <a href="Product_specific.html?id=${product.id}">


  <img
      src="${product.images[0].src}"
      alt="${product.name}"
      class="products-img"
  </img>

  </a>
        <h3>${product.name}</h3>
        <div class="product_description ">
        <p class="product-price">${product.prices.price},-</p>
        <div class="product_specific_cta">
        <a class="cta product_specific_cta" data-product=${product.id}>Add to cart</a>
        </div>
        </div>
    </div>
   `;
  });
}

getProducts(baseUrl);
