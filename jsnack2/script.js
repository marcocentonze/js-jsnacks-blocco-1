/*Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

/* tools:
-prompt
-variables
-if    
*/

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
