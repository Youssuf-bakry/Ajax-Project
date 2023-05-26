window.onload = () => {
  let queryParam = "https://dummyjson.com/products";

  if (
    location.search &&
    location.search.startsWith("?search") &&
    location.search.split("=")[1]
  ) {
    queryParam += "/search?q=" + location.search.split("=")[1];
    document.getElementById("search-input").value =
      location.search.split("=")[1];
  }
  fetchProducts(queryParam);
  // console.log(location.search);
};

function inputHandler(e) {
  let queryParam = "https://dummyjson.com/products/search?q=" + e.target.value;
  fetchProducts(queryParam);

  let newQueryArray = [];
  if (location.search) {
    if (location.search.includes("search")) {
      //http://www.linkedIn.com/?param1=front&param2=back&search=laptop
      const queryArray = location.search.slice(1).split("&");
      // const searchQueryParam = queryArray.startsWith("search")

      for (let i = 0; i < queryArray.length; i++) {
        if (queryArray[i].startsWith("search=")) {
          newQueryArray.push("search=" + e.target.value);
        } else {
          newQueryArray.push(queryArray[i]);
        }
      }
      location.search = "?" + newQueryArray.join("&");
    } else {
      location.search = "&search=" + e.target.value;
    }
  } else {
    location.search = "?search=" + e.target.value;
  }
}
/* changing from function expression to declaration first with ajax
function fetchProducts  (queryParam){
    const prdouctDiv = document.getElementById("products")

    let req = new XMLHttpRequest();
    
    req.onreadystatechange = function(){
         
        if(this.readyState===4){
            // console.log(this)
            let res = JSON.parse(this.responseText)
            // console.log(res);
            prdouctDiv.innerHTML = "";
            for (let i = 0; i < res.products.length; i++) {
                const product = res.products[i];
                prdouctDiv.innerHTML +=`
                <div class="product_card">
                    <div class="product_card-img">
                      <img
                        src="${product.thumbnail}"
                        alt="${product.title}"
                      />
                    </div>
                    <h3>${product.title}</h3>
                    <h4>${product.brand}</h4>
                    <p>${product.description}</p>
                  </div>
                `
            }
        }
        // else {
        //     prdouctDiv.innerHTML += `<h2>Error</h2>`
        // }
    }
    req.open("GET", queryParam, true);
    req.send();
    // console.log(window.location);

}
*/

//switching to fetch
function fetchProducts(queryParam) {
  const prdouctDiv = document.getElementById("products");

  fetch(queryParam)
    .then((res) => res.json())
    .then((res) => {
      prdouctDiv.innerHTML = "";
      for (let i = 0; i < res.products.length; i++) {
        const product = res.products[i];
        prdouctDiv.innerHTML += `
                <div class="product_card">
                    <div class="product_card-img">
                      <img
                        src="${product.thumbnail}"
                        alt="${product.title}"
                      />
                    </div>
                    <h3>${product.title}</h3>
                    <h4>${product.brand}</h4>
                    <p>${product.description}</p>
                  </div>
                `;
      }
    });
}
// this piece of code can't be before function expression 😎
