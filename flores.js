const flores = [
    {
        num: 1,
        title: "Alamanda",
        price: 10.00,
        url: "../images/flowers/alamanda/001.jpg",
        imgs: [
                "../images/flowers/alamanda/001.jpg",
                "../images/flowers/alamanda/002.jpg",
                "../images/flowers/alamanda/003.jpg",
                "../images/flowers/alamanda/004.jpg",
        ],
        desc: "De origem brasileira, a planta atinge quase 4 metros de altura e cresce com facilidade, inclusive sob sol pleno. Com lindas flores gordinhas e vistosas em amarelo-ouro ou roxo, essa trepadeira floresce praticamente o ano inteiro."
    },
    {
        num: 2,
        title: "Amarilis",
        price: 20.00,
        url: "../images/flowers/amarilis/001.jpg",
        imgs:[
            "../images/flowers/amarilis/001.jpg",
            "../images/flowers/amarilis/002.jpg",
            "../images/flowers/amarilis/003.jpg",
            "../images/flowers/amarilis/004.jpg",

        ] 

    },
    {
        num: 3,
        title: "Anturio",
        price: 20.00,
        url: "../images/flowers/anturio/001.jpg",
        imgs:[
            "../images/flowers/anturio/001.jpg",
            "../images/flowers/anturio/002.jpg",
            "../images/flowers/anturio/003.jpg",
            "../images/flowers/anturio/004.jpg",
        ]

    },
    {
        num: 4,
        title: "Astromelia",
        price: 20.00,
        url: "../images/flowers/astromelia/001.jpg",
        imgs:[
            "../images/flowers/astromelia/001.jpg",
            "../images/flowers/astromelia/002.jpg",
            "../images/flowers/astromelia/003.jpg",
            "../images/flowers/astromelia/004.jpg",
        ] 

    },
    {
        num: 5,
        title: "Bastões do imperador",
        price:20.00,
        url: "../images/flowers/bastoes/001.jpg",
        imgs:[
            "../images/flowers/bastoes/001.jpg",
            "../images/flowers/bastoes/002.jpg",
            "../images/flowers/bastoes/003.jpg",
            "../images/flowers/bastoes/004.jpg",
        ]
    },
    {
        num: 6,
        title: "Buganvilia",
        price:20.00,
        url: "../images/flowers/buganvilia/001.jpg",
        imgs:[
            "../images/flowers/buganvilia/001.jpg",
            "../images/flowers/buganvilia/002.jpg",
            "../images/flowers/buganvilia/003.jpg",
            "../images/flowers/buganvilia/004.jpg",
        ]
    },
    {
        num: 7,
        title: "Clivia",
        price:20.00,
        url: "../images/flowers/clivia/001.jpg",
        imgs:[
            "../images/flowers/clivia/001.jpg",
            "../images/flowers/clivia/002.jpg",
            "../images/flowers/clivia/003.jpg",
            "../images/flowers/clivia/004.jpg",
        ]

    },
    {
        num: 8,
        title: "Crisantemos",
        price:20.00,
        url: "../images/flowers/crisantemos/001.jpg",
        imgs:[
            "../images/flowers/crisantemos/001.jpg",
            "../images/flowers/crisantemos/002.jpg",
            "../images/flowers/crisantemos/003.jpg",
            "../images/flowers/crisantemos/004.jpg",
        ]
    },
    {
        num: 9,
        title: "Flor-de-maio",
        price:20.00,
        url: "../images/flowers/flor-de-maio/001.jpg",
        imgs:[
            "../images/flowers/flor-de-maio/001.jpg",
            "../images/flowers/flor-de-maio/002.jpg",
            "../images/flowers/flor-de-maio/003.jpg",
            "../images/flowers/flor-de-maio/004.jpg",
        ]
    },
    {
        num: 10,
        title: "Heliconas",
        price:20.00,
        url: "../images/flowers/heliconias/001.jpg",
        imgs:[
            "../images/flowers/heliconias/001.jpg",
            "../images/flowers/heliconias/002jpg",
            "../images/flowers/heliconias/003.jpg",
            "../images/flowers/heliconias/004.jpg",
        ]
    },
    {
        num: 11,
        title: "Hibisco",
        price:20.00,
        url: "../images/flowers/hibisco/001.jpg",
        imgs:[
            "../images/flowers/hibisco/001.jpg",
            "../images/flowers/hibisco/002.jpg",
            "../images/flowers/hibisco/003.jpg",
            "../images/flowers/hibisco/004.jpg",

        ]
    },
    {
        num: 12,
        title: "Ipe",
        price:20.00,
        url: "../images/flowers/ipe/001.jpg",
        imgs:[
            "../images/flowers/ipe/001.jpg",
            "../images/flowers/ipe/002.jpg",
            "../images/flowers/ipe/003.jpg",
            "../images/flowers/ipe/004.jpg",
        ]
    },
    {
        num: 13,
        title: "Jacaranda",
        price:20.00,
        url: "../images/flowers/jacaranda/001.jpg",
        imgs:[
            "../images/flowers/jacaranda/001.jpg",
            "../images/flowers/jacaranda/002.jpg",
            "../images/flowers/jacaranda/003.jpg",
            "../images/flowers/jacaranda/004.jpg",
        ]
    },
    {
        num: 14,
        title: "Onze-horas",
        price: 50.00,
        url: "../images/flowers/onze-horas/001.jpg",
        imgss:[
            "../images/flowers/onze-horas/001.jpg",
            "../images/flowers/onze-horas/002.jpg",
            "../images/flowers/onze-horas/003.jpg",
            "../images/flowers/onze-horas/004.jpg",
        ]
    },
    {
        num: 15,
        title: "Salmão",
        price: 25.00,
        url: "../images/flowers/salmao/001.jpg",
        imgs:[
            "../images/flowers/salmao/001.jpg",
            "../images/flowers/salmao/002.jpg",
            "../images/flowers/salmao/003.jpg",
            "../images/flowers/salmao/004.jpg",
        ]
    },
    {
        num: 16,
        title: "",
        url: ""
    },
    {
        num: 17,
        title: "",
        url: ""
    },
    {
        num: 18,
        title: "",
        url: ""
    },
]

const floresDestaque = [flores[1], flores[5], flores[4], flores[10]];


function renderCard(flor){
    const produto = document.createElement("div");
    produto.classList.add("produto");
    produto.classList.add("w3-card");
    const img = document.createElement("div");
    img.addEventListener('click', () => {renderModal(flor)});
    img.classList.add('imgFlor');
    img.style.backgroundImage = `url('${flor.url}')`;
    const p = document.createElement("p");
    p.innerText = flor.title;
    const div = document.createElement("div");
    div.classList.add("valueLocal");
    const h4 = document.createElement("h4");
    h4.innerText = `R$${flor.price.toFixed(2).replace(".",",")}`;
    const button = document.createElement("button");
    button.classList.add("addToCart");
    div.appendChild(h4);
    div.appendChild(button);
    produto.appendChild(img);
    produto.appendChild(p);
    produto.appendChild(div);
    return produto
}