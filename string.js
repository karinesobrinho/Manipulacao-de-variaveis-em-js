//Tamanho da string
const textSize = 'Text'.length
console.log(`O número de caracteres da string 'Text' é ${textSize}`)

//retorna um array quebrando a string no caractere passado na funcao
const splittedText = 'Text'.split('x') 
console.log(`'Text' splitted em x, retorna um array, ${splittedText} `)

//substitui a string por outra
const replaceText = 'Text'.replace('Text','replaced')
console.log(`Text substituido ${replaceText}`)

/*Retorn o pedaço de uma funcao 
sendo o primeiro parametro a posicao do caractere e a segunda a posicao do ultimo a ser passado*/
const sliceTextOne = 'Text'.slice(-3)
console.log(`Text cortado (-3) ${sliceTextOne}`)

const sliceTextTwo = 'Text'.slice(0, -1)
console.log(`Text da primeira letra menos a ultima ${sliceTextTwo}`)

const sliceTextThree = 'Text'.slice(2)
console.log(`Text da terceira letra até a ultima ${sliceTextThree} `)

//Retorna o numero de caracteres a partir de uma posicao
const substrText = 'Text'.substr(0,2)
console.log(`as duas primeiras letras da string ${substrText} `)