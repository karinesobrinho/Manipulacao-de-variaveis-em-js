const numeros = [1, 2, 3, 4, 5, 6]

//froEach
//parametros: o valor do item, a posicao do item, array que ele ta lendo
numeros.forEach(numero =>{
    console.log(numero)
})
numeros.forEach((numero,index) =>{
    console.log(index, numero)
})
numeros.forEach((numero,index, arr) =>{
    console.log(index, numero, arr)
})

// map retorna um novo array de mesmo tamanho iterando cada item de um array
console.log(numeros.map(value=> value*2))

/* flat retorna com todos os elementos de um subarray concatenados de forma recursiva
de acordo com a profundidade especificada (depth)
The flat method is not yet implemented in common browsers 

var arr1 = [1, 2, [3, 4]]
arr1.flat() 
retorna [1, 2, 3, 4]
*/

// flatMap retorna um novo array e executa um flat de profundiade 1
var arr1 = [1, 2, 3, 4];
console.log(arr1.map(x => [x * 2])); 

//O método keys() retorna um novo Array Iterator que contém as chaves para cada index do array
const arr = [1, 2, 3, 4, 5] 

const arrKeys = arr.keys()
console.log(
    arrKeys.next(),
    arrKeys.next(),
    arrKeys.next(),
    arrKeys.next(),
    arrKeys.next(),
)

// values retorna um Array Iterator que contem os valores para cada elemento do array
const arrValues = arr.values()
console.log(
    arrValues.next(),
    arrValues.next(),
    arrValues.next(),
    arrValues.next(),
    arrValues.next(),
)

// entries retorna um array iterator com chave-valor pra cada item
const arrEntries = arr.entries()
console.log(
    arrEntries.next(),
    arrEntries.next(),
    arrEntries.next(),
    arrEntries.next(),
    arrEntries.next(),
)

//find retorna o primeiro item do array que satisfaz a condição
console.log(numeros.find(value => value >2 ))

// findIndex retorna a posiçao do primeiro item do array que satisfaz a condição
console.log(numeros.findIndex(value => value >2 ))