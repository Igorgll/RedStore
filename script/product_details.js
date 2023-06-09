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

const productTexts = [
  {
    id: "1",
    productName: "Camiseta Vermelha HRX",
    productPrice: "R$70.00",
    productDetails:
      "Dê um upgrade de estilo ao seu guarda-roupa de verão com a Camiseta Ativa Masculina HRX. Combine-a com um shorts para o treino matinal ou com uma calça jeans para sair com os amigos à noite.",
  },
  {
    id: "2",
    productName: "Tênis de Corrida Preto HRX",
    productPrice: "R$150.00",
    productDetails:
      "O tênis de corrida preto HRX oferece estilo, conforto e desempenho para corredores. Com um design moderno e durável, ele possui amortecimento responsivo e tração confiável em diferentes superfícies. O ajuste confortável e seguro proporciona suporte durante a corrida, ajudando você a alcançar seus objetivos.",
  },
  {
    id: "3",
    productName: "Calça Cinza HRX",
    productPrice: "R$200.00",
    productDetails:
      "A calça cinza HRX é uma peça versátil e estilosa para o seu guarda-roupa. Feita com materiais de qualidade, essa calça proporciona conforto e durabilidade. Seu design moderno e elegante combina perfeitamente com diversas ocasiões, permitindo que você crie looks casuais ou mais sofisticados.",
  },
  {
    id: "4",
    productName: "Polo Azul PUMA",
    productPrice: "R$200.00",
    productDetails:
      "Confortável e versátil, a camisa polo Essentials Pique traz modelagem regular fit, punhos canelados e algodão proveniente da parceria PUMA x Iniciativa Better Cotton.",
  },
  {
    id: "5",
    productName: "Tênis Cinza Breezy",
    productPrice: "R$500.00",
    productDetails:
      "O tênis cinza Breezy é uma escolha perfeita para os amantes de calçados confortáveis e estilosos. Com um design moderno e contemporâneo, ele combina perfeitamente com diversos looks casuais.",
  },
  {
    id: "6",
    productName: "Camiseta Preta PUMA",
    productPrice: "R$170.00",
    productDetails:
      "Caminhe com orgulho e estilo com esta camiseta Graphic Block, estampada com a marca PUMA em um design “color block“. Declaradamente casual, esta é a maneira perfeita de trazer energia em dias discretos.",
  },
  {
    id: "7",
    productName: "Meia HRX",
    productPrice: "R$60.00",
    productDetails:
      "A meia HRX é o complemento perfeito para garantir conforto e desempenho durante suas atividades físicas. Com um design ergonômico e tecnologia avançada, ela proporciona um ajuste preciso e confortável aos seus pés.",
  },
  {
    id: "8",
    productName: "Relógio Fossil",
    productPrice: "R$1750.00",
    productDetails:
      "O relógio Fossi é uma peça de alta qualidade e estilo atemporal. Com um design sofisticado e detalhes cuidadosamente trabalhados, ele é uma escolha elegante para homens e mulheres que apreciam acessórios refinados.",
  },
  {
    id: "9",
    productName: "Relógio RoadMaster",
    productPrice: "R$2500.00",
    productDetails:
      "O relógio Roadmaster é uma verdadeira obra-prima da relojoaria. Combinando design excepcional e artesanato de alta qualidade, esse relógio é uma expressão de elegância e sofisticação.",
  },
  {
    id: "10",
    productName: "Tênis de corrida HRX",
    productPrice: "R$90.00",
    productDetails:
      "O tênis de corrida HRX é o companheiro perfeito para os entusiastas da corrida que buscam desempenho, conforto e estilo. Projetado com tecnologia avançada, ele oferece suporte e amortecimento excepcionais para ajudar você a alcançar seus melhores resultados.",
  },
  {
    id: "11",
    productName: "Tênis feminino PETITE JOLIE",
    productPrice: "R$185.00",
    productDetails:
      "O tênis Petite Jolie é uma combinação perfeita de estilo e conforto. Com um design moderno e feminino, ele é ideal para mulheres que desejam estar na moda e não abrem mão do conforto em seu dia a dia.",
  },
  {
    id: "12",
    productName: "Calça Jogger NIKE",
    productPrice: "R$250.00",
    productDetails:
      "A calça jogger Nike é a escolha perfeita para quem busca estilo e conforto em um único produto. Com um design moderno e atlético, ela combina perfeitamente com um estilo de vida ativo e descontraído.",
  },
];

// PEGA O ID DO PRODUTO DA URL QUE FOI PASSADO ATRAVÉS DO TAG <a> NO INDEX.HTML
function getProductId() {
  const url = new URLSearchParams(window.location.search);
  return url.get("id");
}

function showProductDetails(productId) {
  const product = productTexts.find((item) => item.id === productId);

  if (product) {
    let productName = document.getElementById("product-name");
    productName.innerHTML = product.productName;

    let productPrice = document.getElementById("product-price");
    productPrice.innerHTML = product.productPrice;

    let productDetails = document.getElementById("product-details");
    productDetails.innerHTML = product.productDetails;
  }
}

const productId = getProductId();
showProductDetails(productId);
