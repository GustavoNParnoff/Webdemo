/*

    ~declaração de uma varivavel var ou let~
    var/let clima = "Quente" 
    clima = "Frio" ~valor alterado da variavel~
    console.log(clima)

     ~declaração de uma varivavel const~
    const clima = "Quente" 
    clima = "Frio" ~valor não alterado da variavel~
    console.log(clima)

 */

/*
Block statement

{
    let x = 8
    console.log(x)
}
*/

/* 
var é global e também local
console.log(x) //não esta definido

{
    var x = 8
    
}

console.log(x) //foi definido

______________________________


//converte de string para numero
let string = "123"
Number(string)

//converte de numero para string
let number = 321
String(number)


______________________________
//faz a contagem de caracteres
let palavra = "Paralelepipedo"
console.log(palavra.length)

___________________________________

let number = 564145.156565
//toFixed recebe o numero de casa decimais e replace troca um argumento por outro
console.log(number.toFixed(2).replace(".",","))

________________________

let palavra = "Paralelepipedo"
// todas os caracteres minusculos
console.log(palavra.toLowerCase())
//todos os caracteres maiusculos
console.log(palavra.toUpperCase())

___________________________________

let phrase = "Eu te amo Bruna"

//o metodo split separa uma string apartir de um caracter definido criando um array
let myArray = phrase.split(" ")
//o metodo join pega um argumento e juntar o array transformando em string
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
________________________

//includes procura uma palavra em uma string
let phrase = "Eu te amo Bruna"
console.log(phrase.includes("amo"))
___________________________________________
//criar Array como construtor
let myArray = new Array('a','b','c')
console.log(myArray)

_______________________________________

//manipulação de dados com array
console.log([
    "a",
    {type:"array"},
    function(){return "teste"}
].length)

console.log([
    "a",
    {type:"array"},
    function(){return "teste"}
][2]())

________________________________


//transfomando uma cadeia de caracteres em elemento de um array
let word = "paralelepipedo"
console.log(Array.from(word))
____________________________


let techs = ["html","css", "js"]

//iclue um elemento no final do array
techs.push("nodejs")

//iclue um elemento no inicio do array
techs.unshift("sql")

//remove um elemento do final do array
techs.pop()

//remove um elemnto do inicio do array
techs.shift()

console.log(techs)

//para pegar somente algun elementos do array
techs.slice(1,2)
//slice(de onde inicia apartir de 0 , até onde termina apartir de 1)

//remover 1 ou mais items em qualquer posição do array
techs.splice(1,2)
//slice(de onde inicia, quando elementos para retirar)


//encontrar a posição de um elemento no array
let index = techs.indexOf("js")
//indexof(nome do elemento)

______________________________________________
*/


