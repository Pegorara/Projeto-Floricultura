const logo = document.querySelector("#logo");
const navbar = document.querySelector("#navbar");
const navDown = document.querySelector("#navDown");

const navOptions = [
    {
        type: 'a',
        name: "Home",
        url: "#carrosselLocal"
    },
    {
        type: 'a',
        name: "Destaques",
        url: "#destaquesLocal"
    },
    {
        type: 'a',
        name: "Catálogo",
        url: "#catalogoLocal"
    },
    {
        type: 'a',
        name: "Sobre nós",
        url: "#sobrenosLocal"
    },
    {
        type: 'a',
        name: "Contato",
        url: "#contatoLocal"
    },
    {
        type: 'button',
        img: '../images/svgs/user-circle.svg',
        onClick: ''
    }
]

function renderHeader(){
    for(let op of navOptions){
        if(op.type === 'a'){
            const a = document.createElement('a');
            a.innerText = op.name;
            a.setAttribute("href", op.url);
            navbar.appendChild(a);
        }else{
            const button = document.createElement('button');
            button.setAttribute("onCLick", op.onClick);
            navbar.appendChild(button);
        }
    }
}

function dropdown(){
    navDown.classList.toggle("w3-show");
}

renderHeader();