function menorIndice(names) {

    let iMenor = 0;

    for (let index = 0; index < names.length; index++) {

        if (names[index].length > names[iMenor].length) {
            iMenor = index
        }

    }
    return names[iMenor];
}

console.log(menorIndice(names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))