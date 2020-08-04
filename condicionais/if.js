/* if (condicao) {
    codigo
} 
*/

const a = [0, 1, 2, 3, 4]

a.forEach( item=>{
    if (item % 2 == 0){
        console.log(`o numero ${item} é par`)
    }
    else {
        console.log(`o numero ${item} é impar`)
    }
}   
)