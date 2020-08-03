//array tambem é um objeto

const users = ['name1', 'name2', 'name3', 'name4']

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W'),
  OTHER: Symbol('O')
}

const people = [
  {
    name: 'Joao',
    age: 25,
    gender: gender.MAN
  },
  {
    name: 'Maria',
    age: 34,
    gender: gender.WOMAN
  },
  {
    name: 'Ariel',
    age: 27,
    gender: gender.OTHER
  },
  {
    name: 'Jose',
    age:30,
    gender: gender.MAN
  }
]
console.log(people)

//retornar a quantidade de itens
console.log(people.length)

//Verificar se é array
console.log(Array.isArray(people))

//iterar os itens
people.forEach(people =>{
  console.log(people.name)
})

//filtrar array
const men = people.filter(people => people.gender === gender.MAN)
console.log(men)

const woman = people.filter(people => people.gender === gender.WOMAN)
console.log(woman)

const other = people.filter(people => people.gender === gender.OTHER)
console.log(other)

//retornar um novo
const course = people.map(people=>{
  people.course = 'bla bla bla'
  return people
})
console.log(course)

//transformar array em um outro tipo
const totalAge = people.reduce((age, people) =>{
  age+= people.age
  return age
}, 0)
//primeiro parametro é a func e o segundo é o valor inicial
console.log(totalAge)

//juntando operacoes
const manyOp = people
 .filter(people => people.age % 2 == 0)
 .reduce((age, people)=>{
   age+= people.age
   return age
 }, 0)
console.log(manyOp)