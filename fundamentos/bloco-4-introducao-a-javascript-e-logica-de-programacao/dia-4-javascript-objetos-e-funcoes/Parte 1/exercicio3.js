//Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:


let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim'
  };

  

for (const index in info) {
    console.log(index)
    
}