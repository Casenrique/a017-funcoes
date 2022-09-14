//Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

function somaNumeros(valor1,valor2){
    const soma = valor1 + valor2
    return soma
}
function subtraiNumeros(valor1,valor2){
    const subtracao = valor1 - valor2
    return subtracao
}
function divideNumeros(valor1,valor2){
    const divisao = valor1 / valor2
    return divisao
}
function multiplicaNumeros(valor1,valor2){
    const multiplicacao = valor1 * valor2
    return multiplicacao
}

let valor1 = Number(prompt(`Digite um número.`))
let valor2 = Number(prompt(`Digite outro número, por favor.`))

let impressaoSoma = somaNumeros(valor1,valor2)
let impressaoSubtracao = subtraiNumeros(valor1,valor2)
let impressaoDivisao = divideNumeros(valor1,valor2)
let impressaoMultiplicacao = multiplicaNumeros(valor1,valor2)


console.log(`O resultado da soma é ${impressaoSoma}.
O resultado da subtração é ${impressaoSubtracao}.
O resultado da divisão é ${impressaoDivisao}.
O resultado da multiplicação é ${impressaoMultiplicacao}.
`)



