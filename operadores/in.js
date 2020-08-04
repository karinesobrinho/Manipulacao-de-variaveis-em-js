//in === binario

var arvores = ['pau brasil', 'ipe', 'loureiro', 'cedro']

console.log(0 in arvores)  
//retorna true pois existe a posicao 0 no array

console.log(3 in arvores) 
//retorna true

console.log(4 in arvores) 
//retorna false pois nao existe posicao 4 no array somente 0,1,2,3

console.log('cedro' in arvores)
//retorna false pois deve-se indicar o indice 

//objetos pre definidos
console.log( 'PI' in Math) //retorna true

//objetos personalizados
var user = {
    name: 'joao', age: 24
}
console.log('name' in user)

