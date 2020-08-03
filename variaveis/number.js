var meuNumero = 333.222

//Passa o numero para string
const numberToString = meuNumero.toString()
console.log(`Retorna o numero como string ${numberToString}`, typeof(numberToString))

//deixa com x casas decimais (x passado na func)
const toFixedDecimal = meuNumero.toFixed(1)
console.log(`Retorna com o numero de casas decimais passado na funcao ${toFixedDecimal}`)

//passa para float
console.log('De string para float ', parseFloat(54547.545485))

//passa para int
console.log('De string para int', parseInt(2154.45))