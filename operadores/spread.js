//spread
var partes = ['ombro', 'joelho', 'e',]
var musica = ['cabeca', ...partes, 'pe']

console.log(musica)

function fn (x,y,z) {
    var res = x + y + z
    console.log(res)
}

var arg = [1,1,1]
fn(...arg)