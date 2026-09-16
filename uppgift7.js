/* Lösning till Uppgift 7. Av Micael Huczkowski, 2026 */
/* Program som räknar ut totalsumman från siffror i en array*/
/* Körs enklast med "node uppgift7.js" i terminalen */
"use strict";

const numbers = [
    34,
    6,
    23,
    9,
    2,
    4
];

function calculateSum(numberArray) {
  let sum = 0;

  for (let index = 0; index < numberArray.length; index++) {
    sum = sum + numberArray[index];
  }

  return sum;
}

const total = calculateSum(numbers);

console.log("Summan är", total);