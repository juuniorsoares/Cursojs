// CODIGOS SEM USAR FUNÇÃO: 

// let temperatures;
// let sum;
// let meanTemp;
// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
// sum = 0;
// for (let i = 0; i < temperatures.length; i++) {
//     sum += temperatures[i];
// }
// meanTemp = sum / temperatures.length;
// console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668
// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// sum = 0;
// for (let i = 0; i < temperatures.length; i++) {
//     sum += temperatures[i];
// }
// meanTemp = sum / temperatures.length;
// console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332

// comprimento = temperatures.length
// console.log(comprimento)


// CODIGO USANDO FUNÇÃO: 

// let temperatures;
// let sum;
// let meanTemp;
// function getMeanTemp() {
//     sum = 0;
//     for (let i = 0; i < temperatures.length; i++) {
//         sum += temperatures[i];
//     }
//     meanTemp = sum / temperatures.length;
// }
// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
// getMeanTemp();
// console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668
// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// getMeanTemp();
// console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332


// let a = 100, b = 200, c = 300;
// function test(a) {
//     let b = 10;
//     console.log(a); // parameter a
//     console.log(b); // local variable b
//     console.log(c); // global variable c
// }
// test(1);   // -> 1
// // -> 10
// // -> 300
// console.log(a); // -> 100
// console.log(b); // -> 200
// console.log(c); // -> 300

let a = 200, b = 100;
function test(a){
    let b = 15;
    console.log(a);
    console.log(b);
}
test(1)
console.log(a);
console.log(b);