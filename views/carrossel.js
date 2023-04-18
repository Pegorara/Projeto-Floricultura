const carrosselLocal = document.getElementById("carrosselLocal");
const carrossel = document.getElementById("carrossel");
const imageLocal = document.getElementById("imageLocal");
const buttonsLocal = document.getElementById("buttonsLocal");

let imgCarrossel = 1;

const images = [
    {
        num: 1,
        url: "https://th.bing.com/th/id/R.4fd76ffabc97e69bbba68959c802ba11?rik=%2bqEU2CfI4RctjA&pid=ImgRaw&r=0",
    },
   {
        num: 2,
        url: "https://th.bing.com/th/id/R.18af45cd3882750e728700593faf3295?rik=EzV99jqMQ0HPqg&riu=http%3a%2f%2fwww.floraplus.eu%2fThemes%2fFLORAPLUS%2fassets%2fimg%2fpage%2fPAGE_01.jpg&ehk=80lDvkpqxX1sHloDGGSNk76%2fmfRKvuDEV%2bhVp2NIiMQ%3d&risl=&pid=ImgRaw&r=0",
   },
];

imageLocal.setAttribute("src", images[0].url);

function setImgCarrossel(){
    setInterval(()=>{
        for(let imagem of images){
            imagem.num === imgCarrossel?
            imageLocal.setAttribute("src", imagem.url):null;
            controller();
        }
        
        switch(imgCarrossel){
          case 1:
            imgCarrossel=2
            break;
          case 2:
            imgCarrossel=1
            break;
        }
      }, 3000);
}

function controller(n){
    if(n){
      imgCarrossel = n;
      imageLocal.setAttribute("src", images[n-1].url);
    }
    const buttons = document.querySelectorAll('.btnCarrossel');
    buttons.forEach((btn) => {
      const value = btn.getAttribute("value"); 
      value == imgCarrossel?btn.style.backgroundColor = "green":btn.style.backgroundColor = "transparent";
    })
  }
  




function renderButtons(){
    for(let b of images){
        const button = document.createElement("button");
        button.classList.add("elipse");
        button.classList.add("btnCarrossel");
        button.setAttribute("value", b.num);
        button.setAttribute("onClick", `controller(${b.num})`);
        buttonsLocal.appendChild(button);
    }
}

renderButtons();
setImgCarrossel();