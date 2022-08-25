// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.



function menorIndice(numbers = []) {    
    let maior = 0;
    let iMaior = 0;
    
    for (let index = 0; index < numbers.length; index++) {
        
        if (numbers[index] > numbers[iMaior]) {
            iMaior = index
        }       
    
    } 
    return iMaior;
}

console.log(menorIndice(numbers = [2, 3, 6, 7, 10, 1]))