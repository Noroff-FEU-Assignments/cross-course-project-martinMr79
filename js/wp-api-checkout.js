const baseUrl =
  "https://www.volumvekt.no/rainydays/wp-json/wc/store/products?per_page=3";
const productContainer = document.querySelector(".products");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);

  products.forEach(function (product) {
    productContainer.innerHTML += `
    <div class="products">
    <a href="Product_specific.html?id=${product.id}">

   <div class=also_purchased_container purchase> 
  <img
      src="${product.images[0].src}"
      alt="${product.name}"
      class="purchase"
  </img>
  </div>

  </a>

        </div>
    </div>
   `;
  });
}

getProducts(baseUrl);
