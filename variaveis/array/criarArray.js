//criar array
//o mais comum
const createArray1 = ['name1', 'name2', 'name3', 'name4']

// new Array(itens do array)
const createArray2 =  new Array('name1', 'name2', 'name3', 'name4')

// Array.of(itens do array)
const createArray3 = Array.of('name1', 'name2', 'name3', 'name4')

//pode-se ter varios tipos num unico array
const createArray4 = [1, 2, 'name'] 

// cria um array de posicoes vazias
const createArray5 = Array(3)

/* Array.from 
cria uma nova instancia de array a partir de um parametro array-like ou iterable-object
const div = document.querySelector('div') //retorn node list
const arrayDiv = Array.from(div) */


console.log( 
    createArray1, 
    createArray2, 
    createArray3, 
    createArray4, 
    createArray5, 
    createArray5,  
)