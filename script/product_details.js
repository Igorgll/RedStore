const productTexts = [
  {
    id: "1",
    productName: "Camiseta Vermelha HRX",
    productPrice: "R$70.00",
    productDetails:
      "Dê um upgrade de estilo ao seu guarda-roupa de verão com a Camiseta Ativa Masculina HRX. Combine-a com um shorts para o treino matinal ou com uma calça jeans para sair com os amigos à noite.",
    productImgSrc: "images/product-1.jpg",
    productImgSrcSmall_1: "images/gallery-1.jpg",
    productImgSrcSmall_2: "images/gallery-2.jpg",
    productImgSrcSmall_3: "images/gallery-3.jpg",
    productImgSrcSmall_4: "images/gallery-4.jpg",
  },
  {
    id: "2",
    productName: "Tênis de Corrida Preto HRX",
    productPrice: "R$150.00",
    productDetails:
      "O tênis de corrida preto HRX oferece estilo, conforto e desempenho para corredores. Com um design moderno e durável, ele possui amortecimento responsivo e tração confiável em diferentes superfícies. O ajuste confortável e seguro proporciona suporte durante a corrida, ajudando você a alcançar seus objetivos.",
    productImgSrc: "images/product-2.jpg",
    productImgSrcSmall_1: "images/small-img-2__1.jpg",
    productImgSrcSmall_2: "images/small-img-2__2.jpg",
    productImgSrcSmall_3: "images/small-img-2__3.jpg",
    productImgSrcSmall_4: "images/small-img-2__4.jpg",
  },
  {
    id: "3",
    productName: "Calça Cinza HRX",
    productPrice: "R$200.00",
    productDetails:
      "A calça cinza HRX é uma peça versátil e estilosa para o seu guarda-roupa. Feita com materiais de qualidade, essa calça proporciona conforto e durabilidade. Seu design moderno e elegante combina perfeitamente com diversas ocasiões, permitindo que você crie looks casuais ou mais sofisticados.",
    productImgSrc: "images/product-3.jpg",
  },
  {
    id: "4",
    productName: "Polo Azul PUMA",
    productPrice: "R$200.00",
    productDetails:
      "Confortável e versátil, a camisa polo Essentials Pique traz modelagem regular fit, punhos canelados e algodão proveniente da parceria PUMA x Iniciativa Better Cotton.",
    productImgSrc: "images/product-4.jpg",
  },
  {
    id: "5",
    productName: "Tênis Cinza Breezy",
    productPrice: "R$500.00",
    productDetails:
      "O tênis cinza Breezy é uma escolha perfeita para os amantes de calçados confortáveis e estilosos. Com um design moderno e contemporâneo, ele combina perfeitamente com diversos looks casuais.",
    productImgSrc: "images/product-5.jpg",
  },
  {
    id: "6",
    productName: "Camiseta Preta PUMA",
    productPrice: "R$170.00",
    productDetails:
      "Caminhe com orgulho e estilo com esta camiseta Graphic Block, estampada com a marca PUMA em um design “color block“. Declaradamente casual, esta é a maneira perfeita de trazer energia em dias discretos.",
    productImgSrc: "images/product-6.jpg",
  },
  {
    id: "7",
    productName: "Meia HRX",
    productPrice: "R$60.00",
    productDetails:
      "A meia HRX é o complemento perfeito para garantir conforto e desempenho durante suas atividades físicas. Com um design ergonômico e tecnologia avançada, ela proporciona um ajuste preciso e confortável aos seus pés.",
    productImgSrc: "images/product-7.jpg",
  },
  {
    id: "8",
    productName: "Relógio Fossil",
    productPrice: "R$1750.00",
    productDetails:
      "O relógio Fossi é uma peça de alta qualidade e estilo atemporal. Com um design sofisticado e detalhes cuidadosamente trabalhados, ele é uma escolha elegante para homens e mulheres que apreciam acessórios refinados.",
    productImgSrc: "images/product-8.jpg",
  },
  {
    id: "9",
    productName: "Relógio RoadMaster",
    productPrice: "R$2500.00",
    productDetails:
      "O relógio Roadmaster é uma verdadeira obra-prima da relojoaria. Combinando design excepcional e artesanato de alta qualidade, esse relógio é uma expressão de elegância e sofisticação.",
    productImgSrc: "images/product-9.jpg",
  },
  {
    id: "10",
    productName: "Tênis de corrida HRX",
    productPrice: "R$90.00",
    productDetails:
      "O tênis de corrida HRX é o companheiro perfeito para os entusiastas da corrida que buscam desempenho, conforto e estilo. Projetado com tecnologia avançada, ele oferece suporte e amortecimento excepcionais para ajudar você a alcançar seus melhores resultados.",
    productImgSrc: "images/product-10.jpg",
  },
  {
    id: "11",
    productName: "Tênis feminino PETITE JOLIE",
    productPrice: "R$185.00",
    productDetails:
      "O tênis Petite Jolie é uma combinação perfeita de estilo e conforto. Com um design moderno e feminino, ele é ideal para mulheres que desejam estar na moda e não abrem mão do conforto em seu dia a dia.",
    productImgSrc: "images/product-11.jpg",
  },
  {
    id: "12",
    productName: "Calça Jogger NIKE",
    productPrice: "R$250.00",
    productDetails:
      "A calça jogger Nike é a escolha perfeita para quem busca estilo e conforto em um único produto. Com um design moderno e atlético, ela combina perfeitamente com um estilo de vida ativo e descontraído.",
    productImgSrc: "images/product-12.jpg",
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

    let productImg = document.getElementById("productImg");
    productImg.src = product.productImgSrc;

    let smallImg = document.getElementsByClassName("small-img");
    smallImg[0].src = product.productImgSrcSmall_1;
    smallImg[1].src = product.productImgSrcSmall_2;
    smallImg[2].src = product.productImgSrcSmall_3;
    smallImg[3].src = product.productImgSrcSmall_4;

    // LOOP PARA CADA MINIATURA PARA MUDAR IMG PRINCIPAL
    for (let i = 0; i < smallImg.length; i++) {
      smallImg[i].addEventListener("click", function () {
        productImg.src = smallImg[i].src;
      });
    }
  }
}

const productId = getProductId();
showProductDetails(productId);
