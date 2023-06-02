const btn = document.getElementById("btnTop");

btn.addEventListener("click", () => {
        window.scrollTo(0, 0)
});

document.addEventListener('scroll', ocultar);


function ocultar(){
    if(window.scrollY > 463){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
};

ocultar();