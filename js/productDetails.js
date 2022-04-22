const resultContainer = document.querySelector(".product-details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "https://www.volumvekt.no/rainydays/wp-json/wc/store/products/" + id;

async function fetchProduct() {
  const response = await fetch(url);
  const product = await response.json();
  console.log(product);

  createHtml(product);

  function createHtml(product) {
    resultContainer.innerHTML = `
    

  
  <img
      src="${product.images[0].src}"
      alt="${product.name}"
      class="raincoat_img"
  </img>
  
  
  <h2 class="product_specific_tekst">${product.name}</h2>
        <div class="product_description">
        <div>       
        <p class="product-price price_tags ">${product.prices.price},-</p>
        <p class="product_specific_tekst">${product.description}</p>
        
        
        <div class="product_specific_selling_points">
          ${product.short_description}
      </div>

      <div>
      <a href="Check_out.html" class="cta product_specific_cta">Add to cart</a>

    </div>
    
        
    

    `;
  }
}

fetchProduct();
