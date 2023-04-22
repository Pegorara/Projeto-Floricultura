const catalogo = document.getElementById("listaCatalogo");
let allPages;
let currentPage = 1;
let pages = 1;

const flores = [
    {
        num: 1,
        title: "Alamanda",
        price: 10.00,
        url: "../images/flowers/alamanda/001.jpg"
    },
    {
        num: 2,
        title: "Amarilis",
        price: 20.00,
        url: "../images/flowers/amarilis/001.jpg"

    },
    {
        num: 3,
        title: "Anturio",
        price: 20.00,
        url: "../images/flowers/anturio/001.jpg"

    },
    {
        num: 4,
        title: "Astromelia",
        price: 20.00,
        url: "../images/flowers/astromelia/001.jpg"
    },
    {
        num: 5,
        title: "Bastões do imperador",
        price:20.00,
        url: "../images/flowers/bastoes/001.jpg"
    },
    {
        num: 6,
        title: "Buganvilia",
        price:20.00,
        url: "../images/flowers/buganvilia/001.jpg"
    },
    {
        num: 7,
        title: "Clivia",
        price:20.00,
        url: "../images/flowers/clivia/001.jpg"
    },
    {
        num: 8,
        title: "Crisantemos",
        price:20.00,
        url: "../images/flowers/crisantemos/001.jpg"
    },
    {
        num: 9,
        title: "Flor-de-maio",
        price:20.00,
        url: "../images/flowers/flor-de-maio/001.jpg"
    },
    {
        num: 10,
        title: "Heliconas",
        price:20.00,
        url: "../images/flowers/heliconias/001.jpg"
    },
    {
        num: 11,
        title: "Hibisco",
        price:20.00,
        url: "../images/flowers/hibisco/001.jpg"
    },
    {
        num: 12,
        title: "Ipe",
        price:20.00,
        url: "../images/flowers/ipe/001.jpg"
    },
    {
        num: 13,
        title: "Jacaranda",
        price:20.00,
        url: "../images/flowers/jacaranda/001.jpg"
    },
    {
        num: 14,
        title: "Onze-horas",
        price: 50.00,
        url: "../images/flowers/onze-horas/001.jpg"
    },
    {
        num: 15,
        title: "Salmão",
        price: 25.00,
        url: "../images/flowers/salmao/001.jpg"
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



function renderCard(flor){
    const produto = document.createElement("div");
    produto.classList.add("produtoCatalogo");
    produto.classList.add("w3-card");
    const img = document.createElement("img");
    img.setAttribute("src", flor.url);
    const p = document.createElement("p");
    p.innerText = flor.title;
    const div = document.createElement("div");
    div.classList.add("valueLocal");
    const h4 = document.createElement("h4");
    h4.innerText = `R$${flor.price}`;
    const button = document.createElement("button");
    button.classList.add("addToCart");
    div.appendChild(h4);
    div.appendChild(button);
    produto.appendChild(img);
    produto.appendChild(p);
    produto.appendChild(div);
    return produto
}

function renderCatalogo(){
    let newPage = createPage(pages);
    for(let flor of flores){
        if(flor.title !== ""){
            newPage.children[0].appendChild(renderCard(flor));
            if(flor.num%6 === 0){
                catalogo.appendChild(newPage);
                pages++;
                newPage = createPage(pages);
            }
        }
        if(flor.title === ""){
            catalogo.appendChild(newPage);
        }
    }
    showPage();
}

function createPage(n){
    const page = document.createElement("div");
    const pageContent = document.createElement("div");
    pageContent.classList.add("pageContent");
    page.classList.add("page");
    page.setAttribute("value", n);
    page.setAttribute("hidden", "true");
    page.appendChild(pageContent);
    return page;
}
function nextPage(){
    currentPage++;
    if(currentPage>pages)currentPage = 1;
    showPage();

}
function backPage(){
    currentPage--;
    if(currentPage<1)currentPage = pages;
    showPage();
}

function showPage(){
    allPages = document.querySelectorAll(".page");
    for(let p of allPages){
        const v = p.getAttribute("value");
        if(v == currentPage){
            p.classList.add("w3-show");
        }else{
            p.classList.remove("w3-show");
        }
    }
}

renderCatalogo();