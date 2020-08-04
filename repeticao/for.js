/*
for ([expressaoInicial]; [condicao]; [incremento] ){
    declaracao
} */

const a = ['um', 'dois', 'tres']

for (var index = 0 ; index < a.length ; index++){
    const b = a[index]
    console.log(index, b)
}