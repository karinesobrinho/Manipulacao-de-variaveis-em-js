/*
if (condicao){
    codigo
}
elseif (condicao){
    codigo
}
*/

const x = [1, 4, 3, 5, 8, 15, 67, 100]

x.forEach(item =>{
    if (item % 2 == 0){
        console.log(`${item} divisivel por 2`)
    }
    else if (item % 3 == 0){
        console.log(`${item} divisivel por 3`)
    }
    else if (item % 5 == 0){
        console.log(`${item} divisivel por 5`)
    }
    else if (item % 7 == 0){
        console.log(`${item} divisivel por 7`)
    }
})
//executa uma so vez, 15 é divisivel por 3 e por 5, mas depois de cair na condicao 2, nao executa a condicao 4