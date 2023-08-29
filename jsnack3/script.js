/*Snack 3:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

/* tools:
-array
-sum
-ciclo for(con possibilità che inserisca valore errato)
-stampo
*/


//array
const numberList = [];

//sum
let sum = 0;


//ciclo for
for (let i = 0; i <= 10; i++) { 
  const userNumber = Number(prompt(`Inserisci il numero ${i}`));
  console.log(userNumber);

  if (isNaN(userNumber)) { //se il valore non è un numero si interrompe il ciclo
    alert('Hai inserito un valore non accettato,aggiorna la pagina.(Sono accettati solo numeri!)');
    break;//necessario per interrompere il ciclo
  }
  
  //aggiungo i numeri inseriti nell'array
  numberList.push(userNumber); 
  sum += userNumber;
  console.log(sum);
}
//variabile per il risultato da stampare in pagina
const risultatoEl = document.querySelector("h1");
//console.log(risultatoEl);

//stampa in pagina
risultatoEl.textContent = `La somma dei numeri inseriti è ${sum}`;



