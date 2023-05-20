function handleAddProduct(e){
    e.preventDefault();

    const title = document.getElementById("name")
    if(!title.value) return alert("Title is empty!");

    const http = new XMLHttpRequest();
    const url = 'https://dummyjson.com/products/add';
    const body = {
        title:title.value
    } 
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(JSON.stringify(body));

}