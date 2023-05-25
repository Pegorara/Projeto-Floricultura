const logo = document.querySelector("#logo");
const navbar = document.querySelector("#navbar");
const navDown = document.querySelector("#navDown");
let theme = 'white';
let fontSize = 'normal'


const navOptions = [
    {
        type: 'a',
        name: "Destaques",
        url: "#destaques"
    },
    {
        type: 'a',
        name: "Catálogo",
        url: "#catalogo"
    },
    {
        type: 'a',
        name: "Sobre nós",
        url: "#sobreNos"
    },
    {
        type: 'a',
        name: "Contato",
        url: "#contatoLocal"
    },
    {
        type: 'button',
        img: '../images/svgs/user-circle.svg',
        onClick: 'renderModalLogin()'
    },
    {
        type: 'button',
        img: '../images/svgs/dark-mode.svg',
        onClick: 'changeTheme()'
    },
    {
        type: 'button',
        img: '../images/svgs/fontsize.svg',
        onClick: 'changeFontSize()'
    }
]

function renderModalLogin(){
    document.getElementById("modalLogin").classList.toggle("w3-show");
}

function closeRegister(){
    document.getElementById("modalCadastro").classList.toggle("w3-show");
}

function closeLoginAdm(){
    document.getElementById("modalLoginAdm").classList.toggle("w3-show");
}

function changeLogin(){
    document.getElementById("modalLogin").classList.toggle("w3-show");
    document.getElementById("modalCadastro").classList.toggle("w3-show");
}

function changeLoginAdm(){
    document.getElementById("modalLogin").classList.toggle("w3-show");
    document.getElementById("modalLoginAdm").classList.toggle("w3-show");
}

function changeTheme(){

    if(theme === "white"){
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        document.getElementById("logo").style.filter = "invert(100%)"
        theme = "black"
    }else{
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        document.getElementById("logo").style.filter = "invert(0)";
        theme = "white";
    }
    
}

function changeFontSize() {
    if (fontSize === 'normal') {
        document.querySelector("body").style.fontSize = '1.3rem';
        fontSize = "large"
    } else {
        document.querySelector("body").style.fontSize = '1rem';
        fontSize = "normal"
    }
}

function renderHeader(){
    for(let op of navOptions){
        if(op.type === 'a'){
            const a = document.createElement('a');
            a.innerText = op.name;
            a.setAttribute("href", op.url);
            navbar.appendChild(a);
        }else{
            const button = document.createElement('button');
            button.setAttribute("onClick", op.onClick);
            button.style.backgroundImage = `url('${op.img}')`
            button.style.border = '1px solid white'
            button.classList.add("navButton");
            navbar.appendChild(button);
        }
    }
}

function dropdown(){
    navDown.classList.toggle("w3-show");
}

renderHeader();