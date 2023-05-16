

const fetchProducts = (queryParam)=>{
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
            console.log(res);
            // prdouctDiv.innerHTML = "";
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
    console.log(window.location)

}
 // this piece of code can't be before function expression 😎
window.onload = ()=>{
    let queryParam = "https://dummyjson.com/products";
    // location.search.split.startsWith("?search")
if(location.search && location.search.split.startsWith("search") && location.search.split("=")[1]){
    queryParam += "/search?q=" +location.search.split("=")[1]
}
    console.log(location.search);
    fetchProducts(queryParam);
}