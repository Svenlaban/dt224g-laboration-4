/* Lösning till Uppgift 6. Av Micael Huczkowski, 2026 */
/* Program som räknar ut arean av en rektangel*/
/* Körs enklast med "node uppgift6.js" i terminalen */
"use strict";

function calculateArea(width, height) {
  const area = width * height;
  return area;
}

const areaOne = calculateArea(4, 5);
const areaTwo = calculateArea(6, 7);
const areaThree = calculateArea(10, 10);
const areaFour = calculateArea(165, 1042);
const areaFive = calculateArea(4, 5);

console.log("Arean är", areaOne);
console.log("Arean är", areaTwo);
console.log("Arean är", areaThree);
console.log("Arean är", areaFour);
console.log("Arean är", areaFive);