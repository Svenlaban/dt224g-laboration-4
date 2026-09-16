/* Lösning till Uppgift 5. Av Micael Huczkowski, 2026 */
/* Program som skriverut maträtter från en array. */
/* Körs enklast med "node uppgift5.js" i terminalen */
"use strict";

const food = [
    "Pizza",
    "Hamburgare",
    "Pannkaka",
    "Sushi",
    "Pavlova"
];
/* skriver ut hela arrayen */
console.log("Hela arrayen:", food);

/* skriver ut första elementet*/
console.log("Första elemntet:", food[0]);

/* skriver ut sista elementet */
console.log("Sista elemntet:", food[food.length - 1]);

/* lägger till en maträtt */
food.push("Köttbullar");

/* tar bort första maträtten */
food.shift();

/* Skriver ut arrayen igen för att visa förändringar */
console.log("Hela arrayen efter ändringar:", food);