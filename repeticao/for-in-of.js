var array = [3, 5, 7]

array.prop = 'hello'

for (let i in array){
    console.log(i)
}

for (let i of array){
    console.log(i)
}