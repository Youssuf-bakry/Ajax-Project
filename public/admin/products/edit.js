window.onload = function (){

    
    const id = location.search.slice(1).split("&")[0].split("=")[1];
    fetchCurrent(id);
}



function fetchCurrent (productId){
    if (!productId) return;
    const url ='https://dummyjson.com/products/' + productId;
    fetch(url).then(res=>res.json()).then(res=>{
        document.getElementById("name").value =res.title;
    })
//     const http = new XMLHttpRequest();

//     http.open("GET",url,true);

// http.onreadystatechange = function() {//Call a function when the state changes.
//         if(http.readyState == 4 && http.status == 200) {
//         const res = JSON.parse(http.responseText)
//             console.log(res);
//     document.getElementById("name").value =res.title;

//     }else{
//         console.log(this)
//     }
    
}
// http.send();

function handleEditProduct(e){
    e.preventDefault();

    const title = document.getElementById("name");
    if(!title.value) return alert("Title is empty!");
    const id = location.search.slice(1).split("&")[0].split("=")[1];
    if(!id) return alert("id is empty!");

    const url = 'https://dummyjson.com/products/'+ id;

    fetch(url, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title.value
        })
        })
        .then(res => res.json())
        .then(res=>console.log(res));
    
    } 

    
