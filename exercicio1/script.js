// //a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function seuNome(nome){
//     console.log(`Olá ${nome}!`)
// }

// seuNome(prompt(`Digite seu nome.`))

// //b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function tabuada(numero){
//     const auxTabuada = [1,2,3,4,5,6,7,8,9,10]
//     for(let i in auxTabuada){
//         console.log(`${numero} x ${auxTabuada[i]} = ${numero*auxTabuada[i]}`)
//     }
// }

// tabuada(6)  

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const yourName = (nome) => console.log(`Olá ${nome}!!!`)

yourName(prompt(`Digite seu nome.`))


const tabuada = function (numero){
        const auxTabuada = [1,2,3,4,5,6,7,8,9,10]
        for(let i in auxTabuada){
            console.log(`${numero} x ${auxTabuada[i]} = ${numero*auxTabuada[i]}`)
        }
}
    
tabuada(6) 
tabuada(8)