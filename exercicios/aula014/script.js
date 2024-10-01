// OPERADOR DE STRING 

// let greetings = "Hi";
// console.log(greetings + " " + "Alice"); // -> Hi Alice
// let sentence = "Happy New Year ";
// let newSentence = sentence + 10191;
// console.log(newSentence); // -> Happy New Year 10191
// console.log(typeof newSentence); // -> string


// Operadores de Atribuição Compostos

// let sentence = "Happy New ";
// sentence += "Year ";
// sentence += 10191;
// console.log(sentence); // -> Happy New Year 10191c

// OUTROS OPERADORES

/* TYPEOF:

Já introduzimos otipo deoperador ao discutir tipos de dados.É um operador unário, que verifica o tipo de operando(pode ser uma variável ou um literal).O operador retorna uma string com o nome do tipo, como "boolean" ou "number".
Se você quiser atualizar seu conhecimento sobre esse operador, volte para a seção sobre tipos de dados. */

// EXEMPLO: 
/*let year = 10191;
console.log(typeof year); // -> number
console.log(typeof false); // -> boolean */

/* INSTANCEOF:

O instância deoperador apareceu enquanto discutia arrays. É um operador binário que verifica se um objeto (operando esquerdo) é de algum tipo (operando direito). Dependendo do resultado do teste, ele retorna true ou false.
Durante este curso, a utilidade deste operador se limita a testar se uma variável contém uma matriz.*/

// EXEMPLO:
/*
let names = ["Patti", "Bob"];
let name = names[0];
console.log(names instanceof Array); // -> true
console.log(name instanceof Array); // -> false */

/* DELETE: 

O unário excluir operador foi introduzido ao discutir objetos. Ele permite que você exclua um campo selecionado do objeto cujo nome é indicado com um operando.*/ 

// EXEMPLO:
/*
let user = {
name: "Alice",
age: 38
};
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined */

/* TERNARIO:

O último dos operadores discutidos é bem incomum, porque é o único operador que usa três operandos. É um operador condicional. Com base no valor do primeiro operando (true ou false), o valor do segundo ou terceiro operando, respectivamente, é retornado. Este operador é mais frequentemente usado para colocar um dos dois valores na variável dependendo de uma certa condição. Voltaremos ao operador quando discutirmos o if condicional, mas aqui forneceremos apenas um exemplo simples de seu uso. Os três operandos são separados um do outro por ? (o primeiro do segundo) e : (o segundo do terceiro). */

// EXEMPLOS:

// console.log(true ? "Alice" : "Bob"); // -> Alice
// console.log(false ? "Alice" : "Bob"); // -> Bob

// let name = 1 > 2 ? "Alice" : "Bob";
// console.log(name); // -> Bob


// USANDO ORDEM DE PRECEDÊNCIA DOS OPERADORES : (), *, **, +.

// let a, b;
// b = (a = (20 + 20) * 2) > (3 ** 2);
// console.log(a); // -> 80
// console.log(b); // -> true