const fetchProducts = (queryParam)=>{
  const prdouctDiv = document.getElementById("products")
  
  fetch(queryParam).then(res=>res.json()).then(res=>{
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
          </div>`
      }

  })
}
 // this piece of code can't be before function expression 😎
window.onload = ()=>{
    let queryParam = "https://dummyjson.com/products";
    // location.search.split.startsWith("?search")
if(location.search && location.search.split.startsWith("search") && location.search.split("=")[1]){
    queryParam += "/search?q=" +location.search.split("=")[1]
}
    // console.log(location.search);
    fetchProducts(queryParam);
}