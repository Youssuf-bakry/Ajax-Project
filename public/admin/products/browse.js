window.onload = function(){
    fetchProducts()
}

/*const fetchProducts = ()=>{
    const tbody = document.getElementById("table-body")

    const req = new XMLHttpRequest();
    
    req.onreadystatechange = function(){
        if(this.readyState===4){
            // console.log(this)
            let res = JSON.parse(this.responseText);
            console.log(res);
            tbody.innerHTML = "";
            for (let i = 0; i < res.products.length; i++) {
                const product = res.products[i];
                tbody.innerHTML += `
                <tr>
                <td>${product.title}</td>
                <td>${product.brand}</td>
                <td>
                    <img src="${product.thumbnail}" alt="${product.title}" height=60px/>
                </td>
                <td>
                <a href="./edit.html?id=${product.id}" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>
                </a>
                </td>
                <td>
                <button class="del-btn" href="" onclick=deleteProduct(${product.id}) >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
                </button>
                </td>
                </tr>
                `
                }
        }
    }
    req.open("GET", "https://dummyjson.com/products", true);
    req.send();
    // console.log(window.location);
}
*/
function fetchProducts(){
    const tbody = document.getElementById("table-body");

    fetch('https://dummyjson.com/products').then(res => res.json()).then(res=> {

        tbody.innerHTML = "";
        for (let i = 0; i < res.products.length; i++) {
            const product = res.products[i];
            tbody.innerHTML += `
                    <tr>
                    <td>${product.title}</td>
                    <td>${product.brand}</td>
                    <td>
                        <img src="${product.thumbnail}" alt="${product.title}" height=60px/>
                    </td>
                    <td>
                    <a href="./edit.html?id=${product.id}" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                </svg>
                    </a>
                    </td>
                    <td>
                    <button class="del-btn" href="" onclick=deleteProduct(${product.id}) >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
            </svg>
                    </button>
                    </td>
                    </tr>
            `
            }
});
}
//Delete Function with Ajax method

//this function is not completet cuz this API is not editing the database in the server but faking a response instead.

/*function deleteProduct(productId){

    const http = new XMLHttpRequest();
    // console.log(productId)
    const url = "https://dummyjson.com/products/"+ productId;
    http.open("DELETE",url,true);
    
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4) {
        console.log(http.responseText);
    }}

    http.send();

}*/

// switching to fetch method
function deleteProduct(productId){
fetch('https://dummyjson.com/products/'+productId, {
  method: 'DELETE',
})
.then(res => res.json())
.then(data=>console.log(data));
}

