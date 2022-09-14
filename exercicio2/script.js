//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

console.log(`LETRA A`)
function somaNumeros(valor1, valor2){
    const soma = valor1 + valor2
    console.log(soma) 
}

somaNumeros(4,5)

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

console.log(`LETRA B`)
function comparaNumeros(num1, num2){
    if(num1 >= num2){
        console.log(`Primeiro número é maior que o primeiro.`)
    }else{
        console.log(`Primeiro número é menor que o primeiro.`)
    }
}

comparaNumeros(6,4)
comparaNumeros(7,9)

//c) Uma função que receba um número e imprima se ele é par ou não

console.log(`LETRA C`)
function verificaParidade(num){
    const par = num % 2
    if(par === 0){
        console.log(`O número digitado foi ${num}. O número é par.`)
    }else{
        console.log(`O número digitado foi ${num}. O número é ímpar.`)
    }

}

verificaParidade(Number(prompt(`Digite um número:`)))

//d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

console.log(`LETRA D`)
function mensagem(userInput){
    console.log(`Quantidade de letras na palavra: ${userInput.length}`)
    console.log(`${userInput.toUpperCase()}`)
}

mensagem(prompt(`Digite uma palavra:`))