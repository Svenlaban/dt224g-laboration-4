/* Lösning till Uppgift 8. Av Micael Huczkowski, 2026 */
/* Program som skapar ett objekt som lagrar information om en bok och skriver ut informationen */
/* Körs enklast med "node uppgift8.js" i terminalen */
"use strict";

const book = {
  title: "Harry Potter och de vises sten",
  author: "J.K. Rowling",
  publicationYear: 1997
};

function printBookInformation(bookObject) {
  console.log("Titel:", bookObject.title);
  console.log("Författare:", bookObject.author);
  console.log("Utgivningsår:", bookObject.publicationYear);
}

printBookInformation(book);