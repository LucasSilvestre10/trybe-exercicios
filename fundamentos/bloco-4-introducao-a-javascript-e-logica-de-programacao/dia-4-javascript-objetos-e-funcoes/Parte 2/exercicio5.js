//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


function menorIndice(numbers) {    
    let maior = 0;
    let iMenor = 0;
    let repete = 0;
    
    for (let index = 0; index < numbers.length; index++) {
        
        if (numbers[index] == numbers[repete]) {
            //iMenor = index
            repete = numbers[index]
            if (numbers[index] < numbers[repete]) {
                iMenor = numbers[index]
            }
        }       
    
    } 
    return numbers[iMenor];
}

console.log(menorIndice(numbers = [2, 3, 2, 5, 8, 2, 3, 5, 5, 5]))