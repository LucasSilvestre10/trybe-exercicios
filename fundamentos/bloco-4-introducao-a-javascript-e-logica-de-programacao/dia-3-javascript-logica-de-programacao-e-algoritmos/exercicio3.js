//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let char = [];

for (let index = 0; index < array.length; index++) {
    let n = array[index].length
    char.push(n);
}
console.log(char)

let iMaior = 0;
for (let index2 = 0; index2 < char.length; index2++) {
    if (char[index2] > char[iMaior]) {
        iMaior = index2
    }
}
console.log("maior palavra é " + array[iMaior])