

/* let somaValores = soma(5, 3); */

/* console.log(soma(5, 3))
console.log(soma(10, 3))
console.log(soma(5, 23))
console.log(soma(53, 23)) */

/* 



console.log(soma(a, b)) */
/* let a = Number(prompt("Digite um numero: "))
let b = Number(prompt("Digite um numero: "))

let botao = document.getElementById("btn")

function soma(a, b){
    return a + b
}

document.getElementById("btn").onclick = function(){
    alert(soma(a, b))
} */

/* const btnSomar = document.querySelector("#btn1")

function somar() {
    let primeiroValor = Number(prompt("Digite o primeiro valor: "))
    let segundoValor = Number(prompt("Digite o segundo valor: "))

    let soma = primeiroValor + segundoValor
    alert(soma)
}

btnSomar.addEventListener("click", somar)

const btnSubtrair = document.querySelector("#btn2")

function subtrair() {
    let primeiroValor = Number(prompt("Digite o primeiro valor: "))
    let segundoValor = Number(prompt("Digite o segundo valor: "))
    
    let subtracao = primeiroValor - segundoValor
    alert(subtracao)
}

btnSubtrair.addEventListener("click", subtrair)

const btnMultiplicar = document.querySelector("#btn3")

function multiplicar() {
    let primeiroValor = Number(prompt("Digite o primeiro valor: "))
    let segundoValor = Number(prompt("Digite o segundo valor: "))

    let multiplicar = primeiroValor * segundoValor
    alert(multiplicar)
}

btnMultiplicar.addEventListener("click", multiplicar)

const btnDividir = document.querySelector("#btn4")

function dividir() {
    let primeiroValor = Number(prompt("Digite o primeiro valor: "))
    let segundoValor = Number(prompt("Digite o segundo valor: "))
    
    let divisao = primeiroValor / segundoValor
    alert(divisao)
}  
btnDividir.addEventListener("click", dividir) */

const btnSomar = document.querySelector("#somar")
const btnSubtrair = document.querySelector("#subtrair")
const btnMultiplicar = document.querySelector("#multiplicar")
const btnDividir = document.querySelector("#dividir")
const inputPrimeiroValor = document.querySelector("#primeiroNumero")
const inputSegundoValor = document.querySelector("#segundoNumero")
const divRes = document.querySelector(".res")

function somar(){
    let resultado = Number(inputPrimeiroValor.value) + Number(inputSegundoValor.value)
    divRes.innerText = resultado
}
btnSomar.addEventListener("click", somar)

function subtrair(){
    let resultado = Number(inputPrimeiroValor.value) - Number(inputSegundoValor.value)
    divRes.innerText = resultado
}
btnSubtrair.addEventListener("click", subtrair)

function multiplicar(){
    let resultado = Number(inputPrimeiroValor.value) * Number(inputSegundoValor.value)
    divRes.innerText = resultado
}
btnMultiplicar.addEventListener("click", multiplicar)

function dividir(){
    let resultado = Number(inputPrimeiroValor.value) / Number(inputSegundoValor.value)
    divRes.innerText = resultado
}   
btnDividir.addEventListener("click", dividir)

