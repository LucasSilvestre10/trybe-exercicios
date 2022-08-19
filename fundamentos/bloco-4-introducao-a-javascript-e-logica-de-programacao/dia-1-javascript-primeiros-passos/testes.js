let a = 1;
let b = 2;
let c = 3;

let result = 0;

//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

result = a + b;
console.log("Adição", result);

result = a - b;
console.log("Subtração",result);

result = a * b;
console.log("Multiplicação", result);

result = a / b;
console.log("Divisão", result);

result = a % b;
console.log("Módulo", result)

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

if (a > b) {
    console.log("a maior que b")
} else {
    console.log("b maior que a")
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

if (a > b && a > c) {
    console.log("a é maior")
}if(b > a && b > c) {
    console.log("b é maior")
}if(c > a && c > b){
    console.log("c é maior")
}

//Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

if(a > 0){
    console.log("positive")
}else if(a < 0) {
    console.log("negative")
} else {
    console.log("zero")
}

//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

if (a + b + c == 180) {
    console.log(true)
} else {
    console.log(false)
}

//Um ângulo será considerado inválido se não tiver um valor positivo.
a = 60;
b = 60;
c = 60;
if (a > 0 && b > 0 && c > 0) {
    if (a + b + c == 180) {
        console.log(true)
    } else {
        console.log(false)
    }
} else {
    console.log("angulo invalido")
}

