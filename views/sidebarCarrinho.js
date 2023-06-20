const prods = document.getElementById("prods");



function showCarrinho() {
  document.getElementById("mySidebar").classList.toggle("w3-show");
}

function renderCardCat(flor){
  const card = document.createElement("div");
  card.classList.add("produtoCarrinho");
  const divImgCat = document.createElement("div");
  divImgCat.classList.add("imgCart");
  divImgCat.style.backgroundImage = `url('${flor.url}')`
  divImgCat.classList.add("fotoProdutoCarrinho");
  const divContentCard = document.createElement("div");
  divContentCard.classList.add("contentCart");
  const titlePrice = document.createElement("div");
  titlePrice.classList.add("titlePrice");
  const title = document.createElement("h4");
  title.innerHTML = flor.title;
  const price = document.createElement("h4");
  price.innerHTML = "R$" + flor.price;
  titlePrice.appendChild(title);
  titlePrice.appendChild(price);
  const qtdLocal = document.createElement("div");
  qtdLocal.classList.add("qtdLocal");
  const btn1 = document.createElement('button')
  btn1.innerHTML = "-";
  btn1.addEventListener("click", ()=>{removeItem(flor);inputNum.value = flor.qntd});
  qtdLocal.appendChild(btn1);
  const inputNum = document.createElement("input");
  inputNum.setAttribute("type", "number");
  inputNum.setAttribute("value", flor.qntd);
  inputNum.addEventListener('change',({target})=>{if(target.value<0){target.value=0}else{addItem(flor,target.value)}; calcTotal()})
  qtdLocal.appendChild(inputNum);
  const btn2 = document.createElement('button');
  btn2.innerHTML = "+";
  btn2.addEventListener("click", ()=>{addItem(flor); inputNum.value = flor.qntd});
  const del = document.createElement('button');
  del.innerHTML = "🗑";
  del.classList.add("del");
  del.addEventListener('click',()=>{remove(flor)})

  qtdLocal.appendChild(btn1);
  qtdLocal.appendChild(inputNum);
  qtdLocal.appendChild(btn2);
  divContentCard.appendChild(titlePrice)
  divContentCard.appendChild(qtdLocal);
  divContentCard.appendChild(del);

  card.appendChild(divImgCat);
  card.appendChild(divContentCard);
  
  return card;
}

function reloadCart(){
  prods.innerHTML = "";
  for(let item of carrinho){
    console.log(item)
    prods.appendChild(renderCardCat(item));
  }
}


function addItem(flor, qtd) {
  if (qtd) {
    flores.map((f) => (f.num == flor.num ? (flor.qntd = Number(qtd)) : null));
  } else {
    flores.map((f) => (f.num == flor.num ? (flor.qntd += 1) : null));
  }
  calcTotal();
}

function removeItem(flor) {
  if(flor.qntd <= 0) flor.qntd = 1;
  flores.map((f) => (f.num == flor.num ? (flor.qntd -= 1) : null));
  calcTotal();
}

function calcTotal() {
  const total = carrinho.map((f) => f.qntd * f.price).reduce(sum, 0);
  vTotal.innerHTML = total;
  console.log(total);
}

function remove(flor) {
  flor.qntd = 0;
  carrinho = carrinho.filter((v, k) => v.num != flor.num);
  flores.map((f) => (f.num == flor.num ? f.qntd = 0: null));
  calcTotal();
  reloadCart()
}

function sum(total, v) {
  return total + v;
}
