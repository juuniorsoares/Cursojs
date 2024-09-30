// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(days[0]); // -> Sun
// console.log(days[2]); // -> Tue
// console.log(days[5]); // -> Fri

// days[0] = "Sunday";
// console.log(days[0]); // -> Sunday

// let emptyArray = [];
// console.log(emptyArray[0]); // -> undefined

// let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
// console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
// console.log(names[0][1]); // -> Emma
// console.log(names[1][1]); // -> James

// let femaleNames = names[0];
// console.log(femaleNames[3]); // -> Olivia
// console.log(femaleNames[1]); // -> Mia


// ADICIONANDO MAIS UM OBJETO NA LISTA DE ARRAYS
// let users = [
//     {
//         name: "Calvin",
//         surname: "Hart",
//         age: 66,
//         email: "CalvinMHart@teleworm.us"
//     },
//     {
//         name: "Mateus",
//         surname: "Pinto",
//         age: 21,
//         email: "MateusPinto@dayrep.com"
//     },
//     {
//         name: "Mariana",
//         surname: "da Silva",
//         age: 39,
//         email: "MarianadaSilvao@dayrep.com"
//     }
// ];

// console.log(users[0].name); // -> Calvin
// console.log(users[1].age); // -> 21
// console.log(users[2].name)


// USANDO O INSTANCEOF 
// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let day = "Sunday";

// console.log(typeof days); // -> object
// console.log(typeof day); // -> string

// console.log(days instanceof Array); // -> true
// console.log(day instanceof Array); // -> false


// //USANDO O METODO DE FATIAR NO ARRAY
// let names = ["Olivia", "Emma", "Mateo", "Samuel"];

// let n1 = names.slice(2);
// console.log(n1); // -> ["Mateo", "Samuel"]

// let n2 = names.slice(1, 3);
// console.log(n2); // -> ["Emma", "Mateo"]

// let n3 = names.slice(0, -1);
// console.log(n3); // -> ["Olivia", "Emma", "Mateo"]

// let n4 = names.slice(-1);
// console.log(n4); // -> ["Samuel"]

// console.log(names); // -> ["Olivia", "Emma", "Mateo","Samuel"]

