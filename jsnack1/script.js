/*Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

/* tools:
-prompt x2
-variables
-if
*/

/*
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

} */

/* Da fare con WHILE tutti I prossimi snacks
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

// esercizio rifatto con l'uso del ciclo while

//dichiaro l'index
let i = 0;

//dichiaro l'array
const utenteNumbers = [];

//ciclo while
while (i < 2) {
    //prompt per chiedere all'utente il numero
  const utenteNum = Number(prompt("inserisci un numero"));
  //lo pusho nell'array
  utenteNumbers.push(utenteNum);
  //creo variabile per il confronto dei numeri
  let comparisonNum = utenteNumbers[i - 1];

  console.log(comparisonNum);

  //if
  if (utenteNum[i] > comparisonNum) {
    console.log(`il numero ${utenteNumbers[i]} è maggiore di ${comparisonNum}`);
  } else {
    console.log(`il numero ${comparisonNum} è maggiore di ${utenteNumbers[i]}`);
  }
 //index di incremento (alla fine)
  i++;
}

