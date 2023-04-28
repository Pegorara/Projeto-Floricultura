const destaques = document.getElementById("listaDestaque");
const cartIcon = "./images/svgs/outline-shopping-cart.svg"

const listaDestaques = [
    {
        id: 0,
        title: "Astromélia",
        price: 150,
        img: "./images/flowers/astromelia/001.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe hic explicabo accusantium nesciunt beatae ad odio fuga modi facere voluptatem autem dolorem deserunt quasi in, recusandae pariatur, dolores dignissimos aperiam!"
    },
    {
        id: 1,
        title: "Hibísco",
        price: 150,
        img: "./images/flowers/hibisco/001.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe hic explicabo accusantium nesciunt beatae ad odio fuga modi facere voluptatem autem dolorem deserunt quasi in, recusandae pariatur, dolores dignissimos aperiam!"
    },
    {
        id: 2,
        title: "Bastões",
        price: 150,
        img: "./images/flowers/bastoes/001.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe hic explicabo accusantium nesciunt beatae ad odio fuga modi facere voluptatem autem dolorem deserunt quasi in, recusandae pariatur, dolores dignissimos aperiam!"
    },
    {
        id: 3,
        title: "Crisântemos",
        price: 150,
        img: "./images/flowers/crisantemos/001.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe hic explicabo accusantium nesciunt beatae ad odio fuga modi facere voluptatem autem dolorem deserunt quasi in, recusandae pariatur, dolores dignissimos aperiam!"
    },
]

function renderCard(destaque) {
    const produtoDestaque = document.createElement("div")
    produtoDestaque.classList.add("produtoDestaque")
    produtoDestaque.classList.add("w3-card")
    produtoDestaque.classList.add("abrirModal")

    const img = document.createElement("img")
    img.setAttribute("src", destaque.img)
    img.onclick = () => {
        renderModal(destaque.id)
    }

    const p = document.createElement("p")
    p.innerText = destaque.title

    const divValue = document.createElement("div")
    divValue.classList.add("valueLocal")

    const price = document.createElement("h4")
    price.innerText = "R$" + destaque.price

    const buttonAdd = document.createElement("button")
    buttonAdd.classList.add("addToCart")
    const icone = document.createElement("img")
    icone.setAttribute("src", cartIcon)
    buttonAdd.appendChild(icone)
 
    divValue.appendChild(price)
    divValue.appendChild(buttonAdd)

    produtoDestaque.appendChild(img)
    produtoDestaque.appendChild(p)
    produtoDestaque.appendChild(divValue)

    return produtoDestaque
}

function renderModal(id) {
    let modalInfos
    for(produto of listaDestaques) {
        if(produto.id === id) {
            modalInfos = produto
        }
    }

    const modal = document.createElement("div")
    modal.classList.add("w3-modal")
    modal.setAttribute("id", "modalProduto")

    const conteudoModal = document.createElement("div")
    conteudoModal.classList.add("w3-modal-content")

    const headerModal = document.createElement("div")
    headerModal.setAttribute("id", "headerModalProduto")

    const nomeProduto = document.createElement("p")
    nomeProduto.setAttribute("id", "nomeProduto")
    
    const fecharModal = document.createElement("button")
    fecharModal.classList.add("w3-button")
    fecharModal.setAttribute("id", "fecharModalProduto")
    fecharModal.innerText = "&times;"

    const fotoProduto = document.createElement("div")
    fotoProduto.classList.add("w3-container")
    fotoProduto.setAttribute("id", "fotoProduto")

    const imgProduto = document.createElement("img")
    imgProduto.setAttribute("id", "imagemProduto")
    imgProduto.setAttribute("alt", "Imagem do produto")

    const textDescricao = document.createElement("div")
    textDescricao.classList.add("w3-container")

    const descricao = document.createElement("p")
    descricao.setAttribute("style", "margin: 0;")

    const divDescricao = document.createElement("div")
    divDescricao.classList.add("w3-container")

    const descricaoProduto = document.createElement("p")
    descricaoProduto.setAttribute("id", "descricaoProduto")
    descricaoProduto.innerText = modalInfos.description

    const footerModal = document.createElement("footer")
    footerModal.setAttribute("id", "footerModalProduto")

    const precoModal = document.createElement("p")
    precoModal.innerText = "R$" + modalInfos.price

    const buttonAdd = document.createElement("button")
    buttonAdd.setAttribute("id", "buttonFooterProduto")
    buttonAdd.innerText = "Adicionar ao carrinho"

    const icone = document.createElement("img")
    icone.setAttribute("src", cartIcon)
    buttonAdd.appendChild(icone)
    
}

function renderDestaques() {
    for(produto of listaDestaques) {
        if(produto.title !== "") {
            destaques.appendChild(renderCard(produto))
        }
    }
}

renderDestaques()