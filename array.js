


/*let frutas = ["Maçã", "banana", "abacaxi", "laranja", "morango"]

console.log([frutas.length -1])  */ 

let filmes = ["O poderoso chefão", "O senhor dos anéis", "Matrix", "Star wars" ,"Clube da luta"]

filmes[1] = "Tropa de elite" /* altera valor no indice 2 */

filmes.push("homem aranha 6") /* add no final */
filmes.unshift("homem aranha 0") /* add no inicio */
filmes.pop() /* remove ultimo indice do array */
filmes.shift() /* remove o primeiro indice do array */

/* console.log(filmes[0])
console.log(filmes[1])
console.log(filmes[2])
console.log(filmes[3])
console.log(filmes[4]) */

for (const filme of filmes){
    console.log(filme)
}



/*for(let i = 0; i < filmes.length; i++){
    console.log(filmes[i])
}  */



