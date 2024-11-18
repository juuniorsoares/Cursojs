// AULA 023

// CONTRUTOR DO METODO MAP:

// let emptyMap = new Map();
// let petsMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
// console.log(emptyMap.size); // -> 0
// console.log(petsMap.size); // -> 3



// ELEMENTOS DE MANIPULAÇÃO COM O MAP:

// let petsMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
// console.log(petsMap.get("hamsters")); // -> 5
// petsMap.set("hamsters", 6);
// console.log(petsMap.get("hamsters")); // -> 6
// petsMap.delete("hamsters");
// console.log(petsMap.get("hamsters")); // -> undefined
// petsMap.clear();
// console.log(petsMap.size); // -> 0



// METODO VALUES:

// let anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
// let petValuesIterator = anotherPetsMap.values();
// console.log(petValuesIterator.next().value); // -> 1
// console.log(petValuesIterator.next().value); // -> 3
// console.log(petValuesIterator.next().value); // -> 2



// KEYS:
// let anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
// let petKeysIterator = anotherPetsMap.keys();
// console.log(petKeysIterator.next().value); // -> snakes
// console.log(petKeysIterator.next().value); // -> cats
// console.log(petKeysIterator.next().value); // -> dogs



// ENTRADAS:

// let anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
// let petValuesIterator = anotherPetsMap.values();
// console.log(petValuesIterator.next().value); // -> 1
// console.log(petValuesIterator.next().value); // -> 3
// console.log(petValuesIterator.next().value); // -> 2

// let petsIterator = anotherPetsMap.entries();
// let result = petsIterator.next();
// while (!result.done) {
//     console.log(result.value); // -> ["snakes", 1] -> "cats", 3] -> ["dogs", 2]
//     result = petsIterator.next();
// }



// LOOP FOR:

// let petsArray = ["cat", "dog", "hamster"];
// for( let pet of petsArray) {
//     console.log(pet); // -> cat -> dog -> hamster
// };
// let petsSet = new Set(["cat", "dog", "hamster"]);
// for( let pet of petsSet) {
//     console.log(pet); // -> cat -> dog -> hamster
// };
// let petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
// for( let pet of petsMap) {
//     console.log(pet); // -> ["cats", 1] -> ["dogs", 3] -> ["hamsters", 2]
//     console.log(pet[0]); // -> ctas -> dogs -> hamsters
// }



// OPERADOR SPREAD:

// let petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
// console.log(petsMap instanceof Map); // -> true
// let petsArray = [...petsMap]; // -> [["cats", 1], ["dogs", 3], ["hamsters", 2]]
// console.log(petsArray instanceof Array); // -> true



// OBJETOS
// CRIANDO OBJETOS;
// let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};



// ELEMENTOS DE MANIPULAÇÃO EM OBJETOS: (DELETE)

// console.log(anotherPetsObj.snakes); // -> 1
// anotherPetsObj.snakes = 2;
// console.log(anotherPetsObj.snakes); // -> 2
// delete anotherPetsObj.snakes;
// console.log(anotherPetsObj.snakes); // -> undefined
// anotherPetsObj.snakes = 0;
// console.log(anotherPetsObj.snakes); // 0



// PECORRENDO PELO OBJETOS:

// let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};
// Object.keys(anotherPetsObj).forEach(key=>console.log(key)); // -> snakes -> cats -> dogs
// Object.values(anotherPetsObj).forEach(key=>console.log(key)); // -> 1 -> 3 -> 2
// Object.entries(anotherPetsObj).forEach(key=>console.log(key)); // -> ["snakes", 1] -> ["cats", 3] -> ["dogs", 2]



// OPERADOR DE PROPAGAÇÃO EM OBJETOS:

// let petsObj = {"cats": 1, "dogs": 3, "hamsters": 2};
// let newPetsObj = {...petsObj, "sharks": 1}; // -> {cats: 1, dogs: 3, hamsters: 2, sharks: 1}

