const modal = document.getElementById("modalProduto");
const btnNext = document.getElementById("btnNext");
const btnPrevious = document.getElementById("btnPrevious");
const imgModalProduto = document.getElementById('imgModalProduto');
const fecharModalProduto = document.getElementById('fecharModalProduto');
const descricaoProduto = document.getElementById('descricaoProduto');
const precoModalProduto = document.getElementById('precoModalProduto');
const buttonFooterProduto =  document.getElementById("buttonFooterProduto");


let currentFlor;
let  imgSelect = 0;

btnNext.addEventListener('click', nextImg);
fecharModalProduto.addEventListener('click',closeModal);
btnPrevious.addEventListener('click', previousImg);

function nextImg(){
    imgSelect += 1;
    if(imgSelect > 3){
        imgSelect = 0;
    }
    imgModalProduto.style.backgroundImage = `url('${currentFlor.imgs[imgSelect]}')`;
}

function previousImg(){
    imgSelect -= 1;
    if(imgSelect < 0){
        imgSelect = 3;
    }
    imgModalProduto.style.backgroundImage = `url('${currentFlor.imgs[imgSelect]}')`;
}
function closeModal(){
   modal.classList.remove('w3-show');
}

function renderModal(flor){
    modal.classList.add('w3-show');
    imgSelect = 0;
    currentFlor = flor;
    document.getElementById('nomeProduto').innerText = `${flor.title}`;
    imgModalProduto.style.backgroundImage = `url('${flor.imgs[imgSelect]}')`
    descricaoProduto.innerText = `${flor.desc}`;
    precoModalProduto.innerText = `R$${flor.price.toFixed(2).replace(".",",")}`;
    buttonFooterProduto.addEventListener('click', ()=>{addToCart(flor)})
}
