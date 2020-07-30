const textSize = 'Text'.length
console.log(`O número de caracteres da string 'Text' é ${textSize}`)

const splittedText = 'Text'.split('x') 
console.log(`'Text' splitted em x ${splittedText} `)

const replaceText = 'Text'.replace('Text','replaced')
console.log(`Text substituido ${replaceText}`)

const sliceTextOne = 'Text'.slice(-3)
console.log(`Text cortado (-3) ${sliceTextOne}`)

const sliceTextTwo = 'Text'.slice(0, -1)
console.log(`Text da primeira letra menos a ultima ${sliceTextTwo}`)

const sliceTextThree = 'Text'.slice(2)
console.log(`Text da terceira letra até a ultima ${sliceTextThree} `)

const substrText = 'Text'.substr(0,2)
console.log(`as duas primeiras letras da string ${substrText} `)