const baseUrl = "https://www.volumvekt.no/rainydays/wp-json/wc/store/products";
const productContainer = document.querySelector(".products")
const searchButton = document.querySelector(".search-button")



async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    console.log(products)


    
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

searchButton.onclick = function(){
    const searchInput = document.querySelector("#search-input").value;
    const newUrl = baseUrl + `?search=${searchInput}`;
    productContainer.innerHTML = ""; 
    getProducts(newUrl);
}