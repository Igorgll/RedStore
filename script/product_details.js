let ProductImg = document.getElementById("ProductImg");
let SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function () {
  ProductImg.src = SmallImg[0].src;
};
SmallImg[1].onclick = function () {
  ProductImg.src = SmallImg[1].src;
};
SmallImg[2].onclick = function () {
  ProductImg.src = SmallImg[2].src;
};
SmallImg[3].onclick = function () {
  ProductImg.src = SmallImg[3].src;
};

// PEGA O ID DO PRODUTO DA URL QUE FOI PASSADO ATRAVÉS DO TAG <a> NO INDEX.HTML
function getProductId() {
  const url = new URLSearchParams(window.location.search);
  return url.get("id");
}

const productId = getProductId();
console.log(productId);
