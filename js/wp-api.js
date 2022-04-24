const baseUrl =
  "https://www.volumvekt.no/rainydays/wp-json/wc/v3/products?consumer_key=ck_38121b336efbe031d42e6051ec751997a5dea45f&consumer_secret=cs_c494c3893e8e599504f551d85768b6102ec29ad7&gender=female";
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
        <p>${product.price},-</p>
        
        <a class="cta_small" data-product=${product.id}>Add to cart</a>
        </div>



        </div>
    </div>
   `;
  });
}

getProducts(baseUrl);
