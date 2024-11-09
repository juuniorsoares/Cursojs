// MATRIZES 

// CRIANDO UMA MATRIZ:

// let array1 = []; // -> []
// let array2 = [2, 4, "six"]; // -> [2, 4, "six"]
// let array3 = new Array(); // -> []
// let array4 = new Array(2); // -> [undefined, undefined]
// let array5 = new Array(2, 4, "six"); // -> [2, 4, six]
// let array6 = new Array("2"); // -> ["2"]
// console.log(`array2 : ${typeof array2} : ${array2 instanceof Array} : ${array2.length}`); // -> array2 : object : true : 3
// console.log(`array5 : ${typeof array5} : ${array5 instanceof Array} : ${array5.length}`); // -> array5 : object : true : 3

// ----------------------------------------------------------------------------------

// MESCLANDO MATRIZES:

// let array1 = [10, 20, 30];
// let array2 = ["cat", "dog"];
// let array3 = array1.concat(array2); // -> [10, 20, 30, "cat", "dog"];
// console.log(array1.length); // -> 3
// console.log(array2.length); // -> 2
// console.log(array3.length); // -> 5
// console.log(array3[0]); // -> 10
// console.log(array3[3]); // -> "cat"

// -----------------------------------------------------------------------------------

// ADICIONANDO E REMOVENDO ELEMENTOS NA MATRIZ:

// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array1.push(100);
// console.log(array1)
// array1.unshift("cat")
// console.log(array1)


// REMOVENDO O ULTIMO ELEMENTO DA MATRIZ:

// let remov = array1.pop()
// console.log(array1)


// REMOVENDO O PRIMEIRO ELEMENTO DDA MATRIZ:

// let remov = array1.shift()
// console.log(remov)
// console.log(array1)

// ----------------------------------------------------------------------------------

// ADICIONANDO ELEMENTOS E REMOVENDO SEM USAR METODOS:

// let array1 = [10, 20, 30]; // -> [10, 20, 30]
// array1[3] = 100; // -> [10, 20, 30, 100]
// array1[5] = 1000; // -> [10, 20, 30, 100, undefined, 1000]
// delete array1[1]; // -> [10, undefined, 30, 100, undefined, 1000]
// console.log(array1[1]); // -> undefined


// ----------------------------------------------------------------------------------

// PECORRENDO OS ELEMENTOS DE UMA MATRIZ:

// let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
// for(let index=0; index< array1.length; index++) {
//     console.log(`${index} : ${array1[index]}`); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog
// }


// FORMA MAIS SIMPLIFICADA:

// array1.forEach( (item, index) => console.log(`${index} : ${item}`));


// ----------------------------------------------------------------------------------


// METODOS EVERY E SOME:

// USANDO O SOME:
// let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
// let anyNumberPresent = array1.some( (item) => {
//     if(typeof item === "number") {
//         return true;
//     } else {
//         return false;
//     }
// }); // -> true

// (verifica se todos os elementos do array atendem a uma determinada condição que fornecemos.)


// USANDO O EVERY:
// let array2 = [90, 80, 10, 20, 30, 100, 50];
// let allPositive = array2.every(item => item > 0); // -> true

// ( é bem-sucedido se pelo menos um dos elementos atender à condição. Os métodos retornamverdadeiroem caso de sucesso, oufalsoem caso de falha.)

// ----------------------------------------------------------------------------------

// METODO FILTER:

// let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
// console.log(array1.length); // -> 9
// let numbers = array1.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
// console.log(numbers.length); // -> 7
// console.log(array1.length); // -> 9

// (O filter copia todos os elementos que passaram no nosso teste e os retorna como um novo array.
// Ou seja, ele realmente filtra a matriz original, usando a função de teste de elemento único.).

// ----------------------------------------------------------------------------------

// ELEMENTOS DE MAPEAMNETO:

// let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
// let squarePower = array1.filter(item => typeof item === "number").map(item => item*item); // -> [8100, 6400, 100, 400, 900, 10000, 2500]

// ----------------------------------------------------------------------------------

// SORTEANDO OS ELEMENTOS DA MATRIZ COM O METODO: SORT:

// let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
// let numbers = array1.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
// console.log(numbers[0]);
// numbers.sort((first, second) => {
//     if( first < second) {
//         return -1
//     } else if(first == second) {
//         return 0;
//     } else {
//         return 1;
//     }
// }); // -> [10, 20, 30, 50, 80, 90, 100]
// console.log(numbers[0]);


// CODIGO MAIS SIMPLIFICADO:
// numbers.sort((first, second) =>  first - second); [10, 20, 30, 50, 80, 90, 100]



