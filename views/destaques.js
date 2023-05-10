const destaquesLocal = document.getElementById('listaDestaque');




async function renderDestaque(){
    for(let flor of floresDestaque){
        destaquesLocal.appendChild(await renderCard(flor))
    }
}


renderDestaque();
