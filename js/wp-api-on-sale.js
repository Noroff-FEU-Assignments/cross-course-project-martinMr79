const baseUrl =
"https://www.volumvekt.no/rainydays/wp-json/wc/store/products?on_sale=true";
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
        <p>${product.prices.price},-</p>
        
        <a class="cta_small" data-product=${product.id}>Add to cart</a>
        </div>



        </div>
    </div>
   `;
  });
}

getProducts(baseUrl);
