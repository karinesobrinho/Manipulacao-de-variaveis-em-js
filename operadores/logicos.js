// AND logico &&
//exp1 && exp2

var a = true && true //retorna true
var b = true && false //retorna false
var c = false && true //retorna false
var d = false && false //retorna false 
var e = 'gato' && 'cachorro' //retorna cachorro
var f = false && 'gato' //retorna false
var g = !'gato' && false //retorna false

//OU logico ||
//exp1 || exp2
var h = true || true //retorna true
var i = true || false //retorna true
var j = false || true //retorna true
var k = false || (3 == 4) //retorna false
var l = 'gato'|| 'cachorro' //retorna gato
var m = false || 'gato' //retorna gato

//NOT logico !
//!exp1
var n = !true //retorna false
var o = !false //retorna true
var p = !'gato' //retorna false