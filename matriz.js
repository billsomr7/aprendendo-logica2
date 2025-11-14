let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10,[11, 12, 13]], 
    [14, 15, [16, 17, 18]],
    [[19, [20, 21, 22]]]
]

// 6, 5, 9, 12, 18, 19, 21



console.log(matriz[1][2]) /* acessa o valor 6 */
console.log(matriz[1][1]) /* acessa o valor 5 */
console.log(matriz[2][2]) /* acessa o valor 9 */
console.log(matriz[3][1][1]) /* acessa o valor 12 */
console.log(matriz[4][2][2]) /* acessa o valor 18 */
console.log(matriz[5][0][0]) /* acessa o valor 19 */
console.log(matriz[5][0][1][1]) /* acessa o valor 21 */