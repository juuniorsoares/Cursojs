
// AULA SOBRE CLASSES

// class Pessoa {
//     constructor(data, nome, idade){
//         this.data = data;
//         this.nome = nome;
//         this.idade = idade; 
//     }
// }

// let pessoa = new Pessoa(new Date, 'João', 45);
// console.log(pessoa)


// class Pessoa{
//     nome;

//     get username (){
//         return this.nome;

//     }

//     set setNome (nome){
//         this.nome = nome;

//     }
// }

// let pessoa = new Pessoa();
// pessoa.setNome = 'teste nome';
// console.log("Nome: ", pessoa.username)


// class Pessoa {
//     constructor(nome, telefone, email){
//         this.nome = nome;
//         this.telefone = telefone;
//         this.email = email;
//     }

//     falar(){
//         console.log(`${this.nome} está falando!`)
//     }

//     andar(){
//         console.log(`${this.nome} está andando!`)
//     }
// }

// class PessoaFisica extends Pessoa{
//     constructor(nome, telefone, email, cpf){
//         super(nome, telefone, email);

//         this.cpf = cpf;
//     }
// }

// class PessoaJuridica extends Pessoa{
//     constructor(nome, telefone, email, cnpj){
//         super(nome, telefone, email);

//         this.cnpj = cnpj
//     }

//     pagarSalario(){
//         console.log(`${this.nome} pagou os salarios!`)
//     }
// }

// let pessoa1 = new PessoaFisica("João", "123456", "joao@joao.com", 123456);
// console.log(pessoa1.nome , pessoa1.cpf);
// pessoa1.andar()
// pessoa1.falar()
// console.log("------------------------------------")
// let pessoa2 = new PessoaJuridica("Junior", "654321", "junior@junior.com", "654321");
// console.log(pessoa2.nome, pessoa2.cnpj);
// pessoa2.andar()
// pessoa2.falar()
// pessoa2.pagarSalario()
