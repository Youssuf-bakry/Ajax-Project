window.onload = ()=>{

  let queryParam = "https://dummyjson.com/products";
  
if(location.search && location.search.startsWith("?search") && location.search.split("=")[1]){
  queryParam += "/search?q=" + location.search.split("=")[1];
  document.getElementById("search-input").value = location.search.split("=")[1];
}
fetchProducts(queryParam);
  console.log(location.search);
}

function inputHandler(e){
let queryParam = 'https://dummyjson.com/products/search?q=' + e.target.value;
fetchProducts(queryParam);``
}
// changing from function expression to declaration
function fetchProducts  (queryParam){
    const prdouctDiv = document.getElementById("products")

    let req = new XMLHttpRequest();
    
    req.onreadystatechange = function(){
         /**
          this keyword won't work if this is an arrow funcion😉
          * 
          */
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
 // this piece of code can't be before function expression 😎
