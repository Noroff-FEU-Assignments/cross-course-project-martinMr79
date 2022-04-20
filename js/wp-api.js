const baseUrl = "https://www.volumvekt.no/rainydays/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);

  products.forEach(function (product) {
    productContainer.innerHTML += `
  <div class="product">
  <h2>${product.name}</h2>
  </div>
   `;
  });
}

getProducts(baseUrl);
