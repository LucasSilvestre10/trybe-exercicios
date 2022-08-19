//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let teste = 0;
let menor = 0;
let iMenor = 0;

for (let index = 0; index < numbers.length; index++) {
    
    if (numbers[index] < numbers[iMenor]) {
        iMenor = index
    }
    menor = numbers[iMenor]

}
console.log(menor)
