// USANDO O IF: 

// let isUserReady = confirm("Are you ready?");
// console.log(isUserReady);
// if (isUserReady) {
//     console.log("User ready!");
// }

// let isUserReady = confirm("Are you ready?");
// if (isUserReady) {
//     console.log("User ready!");
//     alert("User ready!");
// }

// let unitPrice = 10;
// let pieces = prompt("How many pieces do you order?", 0);
// if (pieces > 0) {
//     let total = unitPrice * pieces;
//     console.log(total);
// }
// console.log(total);

// let userAge = 23;
// let isFemale = false;
// let points = 500;
// let cartValue = 300;
// let shippingCost = 9.99;
// if (userAge > 21) {
//     if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
//         shippingCost = 0;
//     }
// }
// console.log(shippingCost);


// USANDO O ELSE: 

// let isUserReady = confirm("Are you ready?");
// if (isUserReady) {
//     console.log("User ready!");
// } else {
//     console.log("User not ready!");
// }


// USANDO O ELSE IF:

// let number = prompt("Enter a number", 0);
// if (number < 10) {
//     alert("<10");
// } else if (number < 30) {
//     alert("<30");
// } else if (number < 60) {
//     alert("<60");
// } else if (number < 90) {
//     alert("<90");
// } else if (number < 100) {
//     alert("<100");
// } else if (number == 100) {
//     alert("100")
// } else {
//     alert(">100")
// }



// const INSURANCE_COST = 2.99;

// let shippingCost = 9.99;
// let isOrderValid = true;

// let userAge = 15;
// let points = 500;
// let cartValue = 300;
// let hasPromoCode = true;
// let hasParentsApproval = true;
// let addInsurance = false;

// // Se idade do usuário é menor que 65, mas maior ou igual a 21 E um dos seguintes:
// // - tem Aprovação dos Paisé igual a verdadeiro;
// // - valor do carrinho é maior que 300;
// // - pontos é maior que 500;
// // o Custo de envioé reduzido a zero.
// if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
// shippingCost = 0;

// // Se idade do usuário é menor que 21 mas tem Aprovação dos Pais for definido como verdadeiro, o shippingCost será reduzido em 5;
// } else if (userAge < 21 && hasParentsApproval) { 
// shippingCost = shippingCost - 5;

// // se idade do usuário é menor que 21 e tem Aprovação dos Paisé falso, a ordem é inválida;
// } else if (userAge < 21) {
// isOrderValid = false;
// }

// // se adicionar Seguro é definido como verdadeiro;
// // E além disso ordem É Válida;
// // E tem Código Promocional não é verdade, então adicionamos CUSTO_DO_SEGURO para o shippingValue.
// if (isOrderValid && addInsurance && !hasPromoCode) {
// shippingCost += INSURANCE_COST;
// }

// // No final, exibimos o shippingCost se o pedido for válido e a mensagem se não for.
// if (isOrderValid) {
// console.log(shippingCost);
// } else {
// console.log("Cannot order if under 21");
// }


// USANDO O SWITCH CASE

// let gate = prompt("Choose gate: a, b, or c");
// let win = true;
// switch (gate) {
//     case "a":
//         alert("Gate A: empty");
//         break;
//     case "b":
//         alert("Gate B: main prize");
//         win = true;
//         break;
//     case "c":
//         alert("Gate C: empty");
//         break;
//     default:
//         alert("No gate " + String(gate));
// }
// if (win) {
//     alert("Winner!");
// }



// exercicios:

// let numero = prompt("Digite um numero:" , 0)
// let mensagem = ( numero >= 90 && numero <= 110 ? "BINGO" : "PERDEU")
// alert(mensagem)

// let firstNumber = Number(prompt("Digite o primeiro número")); 
// let secondNumber = Number(prompt("Digite o segundo número")); 
// let operando = prompt("Digite o operando (+, -, * ou /)"); 
// let resultado; if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) { 
//     switch (operando) { 
//         case "+": resultado = firstNumber + secondNumber; 
//         break; 
//         case "-": resultado = firstNumber - secondNumber; 
//         break; 
//         case "*": resultado = firstNumber * secondNumber; 
//         break; 
//         case "/": resultado = firstNumber / secondNumber; 
//         break; 
//         default: resultado = "Erro: operando desconhecido"; } } else { 
//             resultado = "Erro: pelo menos um dos valores inseridos não é um número"; } alert(resultado);