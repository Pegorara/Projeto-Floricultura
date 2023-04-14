const modal = document.getElementById("modalProduto")
const btn = document.getElementById("abrirModal")
const closeModal = document.getElementById("fecharModalProduto")

btn.onclick = () => {
  modal.style.display = "block"
}

closeModal.onclick = () => {
  modal.style.display = "none"
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}