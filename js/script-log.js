/*

Descrizione:
-Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
-Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
*-Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Bonus: far inserire i numeri da un form.
*-Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati.
Bonus: stampare in pagina il risultato, in alternativa all'alert.

*/

// # 5 NUMERI GENERATI CASUALMENTE  
var randomContainer = [];
var randomNum;
var randomNumMax = 100;
var contTimer = 0;
var i = 0;
var userNum;
var flag = false;

while (randomContainer.length < 5) {
    randomNum = Math.floor(Math.random() * (randomNumMax) + 1);
    if (!randomContainer.includes(randomNum)) {
        randomContainer.push(randomNum + " ");
    }
}

alert("Ricordati questi numeri: " + randomContainer);
var intervalId = setInterval(thirtySecTimer, 1000);

for (i = 0; i < 5; i++) {
    userNum = prompt("inserire numero:", 1);
    console.log(userNum);
}



//Creo una funzione che conta fino a 30 secondi
function thirtySecTimer() {
    contTimer++;
    console.log(contTimer);
    if (contTimer === 30) {
        clearInterval(intervalId);
    }
}
