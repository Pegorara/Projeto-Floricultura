let carrinho = [];

const flores = [
  {
    num: 1,
    title: "Alamanda",
    price: 10.0,
    url: "../images/flowers/alamanda/001.jpg",
    imgs: [
      "../images/flowers/alamanda/001.jpg",
      "../images/flowers/alamanda/002.jpg",
      "../images/flowers/alamanda/003.jpg",
      "../images/flowers/alamanda/004.jpg",
    ],
    desc: "De origem brasileira, a planta atinge quase 4 metros de altura e cresce com facilidade, inclusive sob sol pleno. Com lindas flores gordinhas e vistosas em amarelo-ouro ou roxo, essa trepadeira floresce praticamente o ano inteiro.",
    qntd: 0,
  },
  {
    num: 2,
    title: "Amarílis",
    price: 20.0,
    url: "../images/flowers/amarilis/001.jpg",
    imgs: [
      "../images/flowers/amarilis/001.jpg",
      "../images/flowers/amarilis/002.jpg",
      "../images/flowers/amarilis/003.jpg",
      "../images/flowers/amarilis/004.jpg",
    ],
    desc: "Uma flor exótica e elegante, com uma haste longa e folhas largas. Suas pétalas são grandes e brilhantes, geralmente em tons de vermelho, rosa, branco ou bicolor. Ela é conhecida por simbolizar a beleza e o orgulho.",
    qntd: 0,
  },
  {
    num: 3,
    title: "Antúrio",
    price: 20.0,
    url: "../images/flowers/anturio/001.jpg",
    imgs: [
      "../images/flowers/anturio/001.jpg",
      "../images/flowers/anturio/002.jpg",
      "../images/flowers/anturio/003.jpg",
      "../images/flowers/anturio/004.jpg",
    ],
    desc: "Uma flor tropical e exótica, com uma inflorescência em forma de espiga e folhas brilhantes. Ela é encontrada em cores vibrantes como vermelho, rosa, branco e amarelo. É frequentemente usada como planta ornamental em interiores e simboliza hospitalidade e amizade.",
    qntd: 0,
  },
  {
    num: 4,
    title: "Astromélia",
    price: 20.0,
    url: "../images/flowers/astromelia/001.jpg",
    imgs: [
      "../images/flowers/astromelia/001.jpg",
      "../images/flowers/astromelia/002.jpg",
      "../images/flowers/astromelia/003.jpg",
      "../images/flowers/astromelia/004.jpg",
    ],
    desc: "Uma flor elegante e refinada, com pétalas em forma de coração e folhas verde-escuras. Ela é encontrada em várias cores, como rosa, vermelho, laranja, amarelo e branco. Simboliza a amizade duradoura e a lealdade.",
    qntd: 0,
  },
  {
    num: 5,
    title: "Bastão do Imperador",
    price: 20.0,
    url: "../images/flowers/bastoes/001.jpg",
    imgs: [
      "../images/flowers/bastoes/001.jpg",
      "../images/flowers/bastoes/002.jpg",
      "../images/flowers/bastoes/003.jpg",
      "../images/flowers/bastoes/004.jpg",
    ],
    desc: "Uma flor exótica e imponente, com uma haste longa e folhas grandes. Suas flores são tubulares e de cores vibrantes, como vermelho, laranja e amarelo. Ela simboliza a nobreza e a majestade.",
    qntd: 0,
  },
  {
    num: 6,
    title: "Bougainvillea",
    price: 20.0,
    url: "../images/flowers/buganvilia/001.jpg",
    imgs: [
      "../images/flowers/buganvilia/001.jpg",
      "../images/flowers/buganvilia/002.jpg",
      "../images/flowers/buganvilia/003.jpg",
      "../images/flowers/buganvilia/004.jpg",
    ],
    desc: "Uma trepadeira com flores vibrantes e coloridas, geralmente em tons de rosa, vermelho, laranja e roxo. Ela é frequentemente usada como planta ornamental em jardins e varandas, simbolizando a beleza e a abundância.",
    qntd: 0,
  },
  {
    num: 7,
    title: "Clivia",
    price: 20.0,
    url: "../images/flowers/clivia/001.jpg",
    imgs: [
      "../images/flowers/clivia/001.jpg",
      "../images/flowers/clivia/002.jpg",
      "../images/flowers/clivia/003.jpg",
      "../images/flowers/clivia/004.jpg",
    ],
    desc: "Uma planta com flores de aparência exótica, com pétalas largas e verde-escuras. Suas flores são geralmente de cor laranja, mas também podem ser amarelas ou vermelhas. Ela simboliza o amor e a paixão.",
    qntd: 0,
  },
  {
    num: 8,
    title: "Crisântemo",
    price: 20.0,
    url: "../images/flowers/crisantemos/001.jpg",
    imgs: [
      "../images/flowers/crisantemos/001.jpg",
      "../images/flowers/crisantemos/002.jpg",
      "../images/flowers/crisantemos/003.jpg",
      "../images/flowers/crisantemos/004.jpg",
    ],
    desc: "Uma flor popular e versátil, com pétalas em forma de leque e folhas verde-escuras. Ela é encontrada em uma variedade de cores, como branco, amarelo, rosa, roxo e vermelho. É frequentemente usada em arranjos florais e simboliza a felicidade e a longevidade.",
    qntd: 0,
  },
  {
    num: 9,
    title: "Flor-de-maio",
    price: 20.0,
    url: "../images/flowers/flor-de-maio/001.jpg",
    imgs: [
      "../images/flowers/flor-de-maio/001.jpg",
      "../images/flowers/flor-de-maio/002.jpg",
      "../images/flowers/flor-de-maio/003.jpg",
      "../images/flowers/flor-de-maio/004.jpg",
    ],
    desc: "Uma planta com flores pequenas e delicadas, geralmente em tons de rosa e branco. Ela é frequentemente usada como planta ornamental em interiores e simboliza a pureza e a inocência.",
    qntd: 0,
  },
  {
    num: 10,
    title: "Helicônia",
    price: 20.0,
    url: "../images/flowers/heliconias/001.jpg",
    imgs: [
      "../images/flowers/heliconias/001.jpg",
      "../images/flowers/heliconias/002jpg",
      "../images/flowers/heliconias/003.jpg",
      "../images/flowers/heliconias/004.jpg",
    ],
    desc: "Uma planta com flores exóticas e vibrantes, em forma de cacho. Suas pétalas são geralmente vermelhas, laranjas ou amarelas, e suas folhas são longas e verdes. Ela simboliza a audácia e a aventura.",
    qntd: 0,
  },
  {
    num: 11,
    title: "Hibisco",
    price: 20.0,
    url: "../images/flowers/hibisco/001.jpg",
    imgs: [
      "../images/flowers/hibisco/001.jpg",
      "../images/flowers/hibisco/002.jpg",
      "../images/flowers/hibisco/003.jpg",
      "../images/flowers/hibisco/004.jpg",
    ],
    desc: "Uma flor tropical e exuberante, com pétalas em forma de sino e folhas verde-escuras. Ela é encontrada em uma variedade de cores, incluindo rosa, vermelho, laranja e amarelo. É frequentemente usada como planta ornamental em jardins e simboliza a beleza e a feminilidade.",
    qntd: 0,
  },
  {
    num: 12,
    title: "Ipê",
    price: 20.0,
    url: "../images/flowers/ipe/001.jpg",
    imgs: [
      "../images/flowers/ipe/001.jpg",
      "../images/flowers/ipe/002.jpg",
      "../images/flowers/ipe/003.jpg",
      "../images/flowers/ipe/004.jpg",
    ],
    desc: "Uma árvore com flores exuberantes, em forma de trompete, geralmente em tons de rosa, amarelo ou branco. Ela é uma das árvores mais emblemáticas do Brasil e simboliza a força, a vitalidade e a beleza da natureza.",
    qntd: 0,
  },
  {
    num: 13,
    title: "Jacarandá",
    price: 20.0,
    url: "../images/flowers/jacaranda/001.jpg",
    imgs: [
      "../images/flowers/jacaranda/001.jpg",
      "../images/flowers/jacaranda/002.jpg",
      "../images/flowers/jacaranda/003.jpg",
      "../images/flowers/jacaranda/004.jpg",
    ],
    desc: "Uma árvore com flores em forma de sino, em tons de roxo e azul. Ela é uma das árvores mais belas e icônicas do Brasil, e suas flores simbolizam a delicadeza, a elegância e a tranquilidade.",
    qntd: 0,
  },
  {
    num: 14,
    title: "Onze-horas",
    price: 50.0,
    url: "../images/flowers/onze-horas/001.jpg",
    imgss: [
      "../images/flowers/onze-horas/001.jpg",
      "../images/flowers/onze-horas/002.jpg",
      "../images/flowers/onze-horas/003.jpg",
      "../images/flowers/onze-horas/004.jpg",
    ],
    desc: "Uma planta com flores pequenas e delicadas, geralmente em tons de rosa, vermelho, amarelo ou branco. Ela é frequentemente usada como planta ornamental em jardins e varandas, simbolizando a alegria e a espontaneidade.",
    qntd: 0,
  },
  {
    num: 15,
    title: "Ixora",
    price: 25.0,
    url: "../images/flowers/ixora/001.jpg",
    imgs: [
      "../images/flowers/ixora/001.jpg",
      "../images/flowers/ixora/002.jpg",
      "../images/flowers/ixora/003.jpg",
      "../images/flowers/ixora/004.jpg",
    ],
    desc: "Uma flor com pétalas em forma de leque, em tons de rosa claro e salmão. Ela é uma das flores mais delicadas e românticas, e simboliza a feminilidade, a graça e a beleza suave.",
    qntd: 0,
  },
  {
    num: 16,
    title: "Flamboyant",
    price: 25.0,
    url: "../images/flowers/flamboyant/001.jpg",
    imgs: [
      "../images/flowers/flamboyant/001.jpg",
      "../images/flowers/flamboyant/002.jpg",
      "../images/flowers/flamboyant/003.jpg",
      "../images/flowers/flamboyant/004.jpg",
    ],
    desc: "As pétalas das flores do Flamboyant são grandes e têm uma forma distinta, lembrando uma borboleta ou uma chama. As cores das pétalas variam do vermelho intenso, laranja vibrante ao amarelo brilhante, criando um espetáculo de cores vibrantes e exuberantes.",
    qntd: 0,
  },
];

const floresDestaque = [flores[1], flores[5], flores[4], flores[10]];

function renderCard(flor) {
  const produto = document.createElement("div");
  produto.classList.add("produto");
  produto.classList.add("w3-card");
  const img = document.createElement("div");
  img.addEventListener("click", () => {
    renderModal(flor);
  });
  img.classList.add("imgFlor");
  img.style.backgroundImage = `url('${flor.url}')`;
  const p = document.createElement("p");
  p.innerText = flor.title;
  const div = document.createElement("div");
  div.classList.add("valueLocal");
  const price = document.createElement("p");
  price.innerText = `R$${flor.price.toFixed(2).replace(".", ",")}`;
  const button = document.createElement("button");
  button.classList.add("addToCart");
  button.addEventListener('click', ()=>{
    addToCart(flor);
  })
  div.appendChild(price);
  div.appendChild(button);
  produto.appendChild(img);
  produto.appendChild(p);
  produto.appendChild(div);
  return produto;
}


function addToCart(flor) {
    const exist = false;
    carrinho.map((f) => f.num == flor.num?exist=true:null);
    if(!exist){
        carrinho.push(flor);
    }
    reloadCart();
  }