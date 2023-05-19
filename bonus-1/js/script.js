"use strict";

// DICHIARAZIONE VARIANTI
let result = 0;
let myRow = document.getElementById('row');

// CREAZIONE CICLO
for(let i = 1; i <= 100; i++){
    
    // CONDIZIONI PER LA VISUALIZZAZIONE
    if (i % 15 == 0) {
        let result = "FizzBuzz";
        console.log(result)
        myRow.innerHTML+= `<div class="col purple"><h1>${result}</h1></div>`;
    } else if (i % 3 == 0) {
        let result = "Fizz";
        console.log(result)
        myRow.innerHTML+= `<div class="col red"><h1>${result}</h1></div>`;
    } else if (i % 5 == 0) {
        let result = "Buzz";
        console.log(result)
        myRow.innerHTML+= `<div class="col green"><h1>${result}</h1></div>`;
    } else {
        let result = i;
        console.log(result)
        myRow.innerHTML+= `<div class="col blue"><h1>${result}</h1></div>`;
    }

}

