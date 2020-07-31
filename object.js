let user = {
    name: 'joaozinho',
    sobrenome : 'da Silva',
    idade: 22,
    cidade: 'Itu',
}
console.log(user)

//recupera as chaves do objeto
console.log('props do objeto: ', Object.keys(user))

//recupera os valores das chaves
console.log('valores das chaves do objeto: ', Object.values(user))

//retorna um array de arrays contendo os nomes das props e os valores
console.log('nomes e valores: ', Object.entries(user))

//Merge de propriedades
Object.assign(user, {nomeCompleto: 'Joaozinho Sousa da Silva'})
console.log('adiciona a prop nomeCompleto ', user)

//retorna um novo objeto mergeando dois ou mais objetos
console.log('objetos mergeados ', Object.assign({}, user, {altura:1.80}))

//alterar a propriedade do objeto
user.name = 'outro nome'
user['cidade'] = 'outra cidade'
console.log(user)

const prop = 'sobrenome'
user[prop] = 'outro sobrenome'
console.log(user)

//adicionar prop
user.nomeDoMeio = 'Sousa'
console.log(user)

//deletar prop
delete user.idade
console.log(user)