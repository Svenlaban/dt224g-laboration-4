/* Lösning till Uppgift 2. Av Micael Huczkowski, 2026 */
/* Program som skapar räknar ut totalpris på antal varor, samt lägger på moms */
/* Körs enklast med "node uppgift2.js" i terminalen */
"use strict";

const cost = 100;
const quantity = 3;

/* Beräknar totalpriser före pcj efter moms */
const totalCost = cost * quantity;
const withTax = totalCost * 1.25;

console.log("Pris:", cost, "kr");
console.log("Antal:", quantity);
console.log("Totalt:", totalCost, "kr");
console.log("Totalt inkulsive moms:", withTax, "kr");