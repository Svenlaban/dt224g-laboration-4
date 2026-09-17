/* Lösning till Uppgift 9. Av Micael Huczkowski, 2026 */
/* Program som går igenom en array med personupgifter och avgör om personer är myndiga eller inte */
/* Körs enklast med "node uppgift9.js" i terminalen */
"use strict";

const people = [
  {
    name: "Pippi Långstrump",
    age: 9,
    city: "Visby"
  },
  {
    name: "Emil Svensson",
    age: 8,
    city: "Lönneberga"
  },
  {
    name: "91:an Karlsson",
    age: 20,
    city: "Klackamo"
  }
];

function printPersonInformation(person) {
  console.log("Namn:", person.name);
  console.log("Stad:", person.city);

  if (person.age >= 18) {
    console.log("Personen är myndig.");
  } else {
    console.log("Personen är minderårig.");
  }
}

for (let index = 0; index < people.length; index++) {
  printPersonInformation(people[index]);
}