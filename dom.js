const botao = document.querySelector("#botao")
const titulo = document.querySelector("#titulo")

function trocaTexto() {
    titulo.innerText = "Jeferson"
   
}

botao.addEventListener("click", trocaTexto) 