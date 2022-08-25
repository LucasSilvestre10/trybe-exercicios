//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.


function menorIndice(numbers) {    
    let maior = 0;
    let iMenor = 0;
    
    for (let index = 0; index < numbers.length; index++) {
        
        if (numbers[index] < numbers[iMenor]) {
            iMenor = index
        }       
    
    } 
    return iMenor;
}

console.log(menorIndice(numbers = [2, 4, 6, 7, 10, 0, -3]))