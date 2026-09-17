/* Lösning till Uppgift 4. Av Micael Huczkowski, 2026 */
/* Program som skriver ut alla jämna heltal från 1 till 20*/
/* Körs enklast med "node uppgift4.js" i terminalen */
"use strict";

for (let number = 1; number <= 20; number++) {
  if (number % 2 === 0) { /* Ett tal är jämt om division med 2 inte ger någon rest */
    console.log(number);
  }
}