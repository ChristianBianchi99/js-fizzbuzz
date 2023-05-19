"use strict";

// DICHIARAZIONE VARIANTI
let result = 0;

// CREAZIONE CICLO
for(let i = 1; i <= 100; i++){
    
    // CONDIZIONI PER LA VISUALIZZAZIONE
    if (i % 15 == 0) {
        let result = "FizzBuzz";
        console.log(result)
    } else if (i % 3 == 0) {
        let result = "Fizz";
        console.log(result)
    } else if (i % 5 == 0) {
        let result = "Buzz";
        console.log(result)
    } else {
        let result = i;
        console.log(result)
    }
    
}