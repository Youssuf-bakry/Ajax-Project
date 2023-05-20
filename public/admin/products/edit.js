window.onload = function (){

    
    const id = location.search.slice(1).split("&")[0].split("=")[1];
    fetchCurrent(id);
}

function fetchCurrent (productId){
    if (!productId) return;
    const http = new XMLHttpRequest();
    const url ='https://dummyjson.com/products/' + productId;

    http.open("GET",url,true);

http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
        const res = JSON.parse(http.responseText)
            console.log(res);
    document.getElementById("name").value =res.title;

    }else{
        console.log(this)
    }
    
}
http.send();
}

function handleEditProduct(e){
    e.preventDefault();

    const title = document.getElementById("name");
    if(!title.value) return alert("Title is empty!");
    const id = location.search.slice(1).split("&")[0].split("=")[1];
    if(!id) return alert("id is empty!");

    const http = new XMLHttpRequest();
    const url = 'https://dummyjson.com/products/'+id;
    const body = {
        title:title.value 
    } 
    http.open('PUT', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(JSON.stringify(body));

}