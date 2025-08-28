let readline = require('readline-sync');

console.log("---Formulário---")

let nome = readline.question("Digite o seu nome: ")
let dia = readline.question ("Digite o dia de seu nascimento: ")
let mes = readline.question ("Digite o mes de seu nascimento: ")
let ano = readline.question ("Digite o ano de seu nascimento: ")
let numero = readline.question ("Digite o seu número de telefone ")
let animal = readline.question ("Voce tem animal? ")
let quantidade = readline.question ("Quantos animais possui? ")
let idade = readline.question ("Voce é maior de idade? ")

console.log ("--Informações do usuario--")

console.log ("O nome é: "+nome)
console.log ("Data de nascimento é: "+dia +"/"+mes +"/"+ano)
console.log ("O número é: "+numero)
console.log ("O animal é: "+animal)
console.log ("A quantidade é: "+quantidade)
console.log ("A idade é: "+idade)
