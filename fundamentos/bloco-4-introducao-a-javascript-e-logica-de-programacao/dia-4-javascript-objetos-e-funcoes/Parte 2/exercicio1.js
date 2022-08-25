// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(string) {
    reverse = string.split("").reverse().join("");
    if (string === reverse) {
        return true
    } else {
        return false
    }

}

console.log(verificaPalindrome("arara"))
console.log(verificaPalindrome("desenvolvimento"))