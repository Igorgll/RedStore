const first_product = document.getElementById("red-shirt");

function firstProdutctSelected() {
   localStorage.setItem("red-shirt", first_product);
} 

first_product.addEventListener("click", firstProdutctSelected);