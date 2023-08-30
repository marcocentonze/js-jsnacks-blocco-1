/*Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

/* tools:
-prompt
-variables
-if    
*/

/*
//assegno delle variabili alle risposte dell'utente tramite prompt
const primaParola = prompt("Inserisci una parola");

const secondaParola = prompt("Inserisci una parola");

//assegno variabile risultato che userò per stampare il risultato
const risultatoEl = document.querySelector("h1");

//if + cosa stampare
if (primaParola.length > secondaParola.length) {
  risultatoEl.innerHTML = `${primaParola} è la parola più lunga,invece ${secondaParola} è la più corta!`;
} else if (secondaParola.length > primaParola.length) {
  risultatoEl.innerHTML = `${secondaParola} è la parola più lunga,invece ${primaParola} è la più corta!`;
} else {
  risultatoEl.innerHTML = `${primaParola} e ${secondaParola} hanno la stessa lunghezza!`;
}

//esercizio fatto con while 
/*  Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

// Richiedo due parole all'utente
const parola1 = prompt("Inserisci la prima parola");
const parola2 = prompt("Inserisci la seconda parola");

let lunghezzaParola1 = parola1.length;
let lunghezzaParola2 = parola2.length;

// Stampo prima la parola più corta e poi la più lunga
let risultato = "";

// Ciclo while 
while (lunghezzaParola1 > 0 && lunghezzaParola2 > 0) {

  // Confronto le lunghezze delle parole
  if (lunghezzaParola1 <= lunghezzaParola2) {
    risultato += "La parola più corta è: " + parola1;
    risultato += "La parola più lunga è: " + parola2;
  } else {
    risultato += "La parola più corta è: " + parola2;
    risultato += "La parola più lunga è: " + parola1;
  }
  // Decremento delle lunghezze delle parole
  lunghezzaParola1 = 0;
  lunghezzaParola2 = 0;
}
//stampo in console
console.log(risultato);






