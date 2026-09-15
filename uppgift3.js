/* Lösning till Uppgift 3. Av Micael Huczkowski, 2026 */
/* Program som avgör barn/vuxen/pensionär baserat på ålder */
/* Körs enklast med "node uppgift3.js" i terminalen */
"use strict";

const age = 0; /* ändra denna siffra för att få olika resultat */

if (age < 18) {
  console.log("Barn");
} else if (age <= 64) {
  console.log("Vuxen");
} else {
  console.log("Pensionär");
}