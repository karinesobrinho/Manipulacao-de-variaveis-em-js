const frutas = ['maça', 'banana', 'manga']

// .push adicionar um elemento
frutas.push('amora','abacate')
console.log(frutas)

// .pop remove e retorna o ultimo elemento
console.log(frutas.pop()) 
console.log(frutas)

// unshift adiciona o elemento no começo do array e retorna o tamanho do array
console.log(frutas.unshift('acerola'))
console.log(frutas)

// shift remove o primeio elemento do array e retorna o item que removeu
console.log(frutas.shift())
console.log(frutas)

// concat concatena um ou mais arrays retornando um novo
const citricos = ['laranja', 'limão', 'mexirica']
const todos = frutas.concat(citricos)
console.log(todos)

// slice retorna um novo array 'fatiado de acordo com inicio e fim
console.log(
    todos.slice(0, 5), //parametros: onde começa e onde para
    todos.slice(3,7), 
    todos.slice(3), //um unico parametro começa nele e vai ate o fim
) 

/*splice 
altera o array adicionando elementos enquando remove elementos antigos 
retorna sempre os itens removidos
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(
    arr.splice(8), //remove e retorna o 9
    arr.splice(0, 3, 'um','dois', 'tres'), //parametro: onde sera modificado, quantos itens vao ser removidos, o que  sera adicionado
    arr
)

const numeros = [1, 2, 3, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
//find retorna o primeiro item do array que satisfaz a condição
console.log(numeros.find(value => value >2 ))

// findIndex retorna a posiçao do primeiro item do array que satisfaz a condição
console.log(numeros.findIndex(value => value >2 ))

//indexOf retorna o primeiro indice em que um elemento pode ser encontrado no array
console.log(numeros.indexOf(3))

// lastIndexOf retorna o ultimo indice em que um elemento pode ser encontrado no array
console.log(numeros.lastIndexOf(4))

//includes retorna um booleano verificando se determinado elemento existe no array
console.log(numeros.includes(1)) //true
console.log(numeros.includes(0)) //false

// some retorna um booleano indicando se algum item do array satisfaz uma condição
console.log(numeros.some(value => value %2 === 0)) //true

// every verifica se todos os itens satisfazem a uma condicao e retorna um booleano
console.log(numeros.every(value => value > 0)) //true

//sort ordena elementos do array de acordo com uma condição
console.log(numeros.sort()) //retorna em ordem crescente

//reverse reverte o sentido do array
console.log(numeros.reverse())

//join separa os elementos do array por um delimitador retorna como string
console.log(numeros.join('-'))

// reduce retorna um novo tipo de dado iterando cada posicao de um array
console.log(numeros.reduce((total, value)=> total += value, 0 )) //soma todos 