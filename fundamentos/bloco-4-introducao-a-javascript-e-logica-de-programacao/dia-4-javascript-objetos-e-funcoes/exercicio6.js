

function repete(numbers) {
    let current = 0;
    let cnt = 0;
    let repete = 0;
    for (var index = 0; index < numbers.length; index++) {
        if (numbers[index] != current) {
            if (cnt > 0) {
                
            }
            current = numbers[index];
            cnt = 1;
        } else {
            cnt++;
            repete = numbers[index]
        }
    }
    return repete;
}



console.log(repete(numbers = [2, 3, 2, 5, 8, 2, 3]));