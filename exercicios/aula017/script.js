// USANDO O WHILE:

// let n = 0;
// while(n < 101){
//     console.log(n)
//     n += 1
// }

// let n = 0;
// while(n < 90 ) {
//     console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
//     n += 10;
// }

// let acabou = false;
// let contador = 1;
// while( acabou != true){
//     let continuarloop = confirm(`[${contador}] continuar loop?`);
//     acabou = continuarloop === true ? false : true;
//     contador = contador += 1;
// }

// let isOver = false;
// let counter = 1;
// while (!isOver) {
//     isOver = !confirm(`[${counter++}] Continue the loop?`);
// }


// USANDO O DO WHILE: 

// let acabou = false;
// while(acabou){
//     console.log("ACABOU!")
// };
// do{
//     console.log("NÃO ACABOU!")
// } while(acabou)


// USANDO O FOR:

// for (let i = 1 ; i < 11 ; i++){
//     console.log(i)
// }

// let names = [];
// let isOver = false;
// while (!isOver) {
//     let name = prompt("Enter another name or press cancel.");
//     if (name != null) {
//         names.push(name);
//     } else {
//         isOver = true;
//     }
// }
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }


// let values = [10, 30, 50, 100];
// for (let i = 0; i < values.length; i++) {
//     console.log(values[i]); // -> 10, 30, 50, 100
// }
// for (let i = values.length - 1; i > 0; i--) {
//     console.log(values[i]); // -> 100, 50, 30, 10
// }
// for (let i = 0; i < values.length; i += 2) {
//     console.log(values[i]); // -> 10, 50
// }


// USANDO O ForEach:

// let cities = [
//     { name: "New York", population: 18.65e6 },
//     { name: "Cairo", population: 18.82e6 },
//     { name: "Mumbai", population: 19.32e6 },
//     { name: "São Paulo", population: 20.88e6 },
//     { name: "Mexico City", population: 21.34e6 },
//     { name: "Shanghai", population: 23.48e6 },
//     { name: "Delhi", population: 25.87e6 },
//     { name: "Tokyo", population: 37.26e6 }
// ];
// for (let city of cities) {
//     if (city.population > 20e6 && city.population < 25e6) {
//         console.log(`${city.name} (${city.population})`);
//     }
// }


// let user = {
//     name: "Calvin",
//     surname: "Hart",
//     age: 66,
//     email: "CalvinMHart@teleworm.us"
// };
// for (let key in user) {
//     console.log(`${key} -> ${user[key]}`);
// };

// let i = 0;
// // An infinite loop
// while (true) {
//     console.log(i);
//     i++;
//     if (i >= 10) {
//         break;
//     }
// }
// alert(`Exited the loop with a break (${i}).`);

// for (let i = 0; i < 10; i++) {
//     if (i == 8) {
//         continue;
//     }
//     console.log(i);
// }

// let x = 100;
// if (x < 100)
//     x = 20;
// console.log(x)


// for (let x = 10; x > 1; x -= 2)
//     console.log("hello")

// for (let a = 4; a < 4; a++) {
//     console.log("test");
// }

// let car = {make: "Citroen", model: "DS"};
// for (let f in car)
// console.log(f);

let steps = [3, 2, 1];
for (let n of steps)
console.log(n);