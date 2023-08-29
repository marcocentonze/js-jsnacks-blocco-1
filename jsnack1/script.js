/*Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

/* tools:
-prompt x2
-variables
-if
*/

//assegno delle variabili alle risposte dell'utente tramite prompt
const primoNum = Number(prompt("Inserisci un numero"));

const secondoNum = Number(prompt("Inserisci un numero"));

//dichiaro variabile per il risultato e la inserisco in pagina
let risultato = document.querySelector("h1");

//if +  testo che andrà in pagina
if (primoNum > secondoNum) {

    risultato.innerHTML = `${primoNum} è il numero maggiore`;

} else if (secondoNum > primoNum) {

    risultato.innerHTML = `${secondoNum} è il numero maggiore`;

}