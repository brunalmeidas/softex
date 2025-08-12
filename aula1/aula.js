//nota do aluno
let n1 = 7
let n2 = 5
let n3 = 10
let n4 = 10
//a media do aluno
let media = (n1+n2+n3+n4)/4
//mostrar a media do aluno
console.log(media)

let numero = Match.sqrt(9)

console.log(numero)

let a = 1
let b = -3
let c = -4

let delta = Mach.pow(b, 2) -4 * a *c

if (delta < 0) {
    console.log("Não existem raízes reais") 
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt (delta)) / (2 * a)
    
    console.log ("x1 =", x1)
    console.log ("x2 =", x2)
}