//break
var a = 0

while(true){
    a++
    console.log(a)
    if(a > 4){
        break
    }
}

//continue
//pula uma execucao
var b = [1, 2 , 3, 4, 5, 6]

for (let c = 0; c<b.length; c++){
    const e = b[c]

    if (e % 2 == 0){
        continue
    }
    console.log(e)
}