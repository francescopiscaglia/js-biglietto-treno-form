// creo i due prompt per le risposte dell'utente
// const numberOfKm = Number(prompt("Ciao, quanti km dovrai percorrere"));
// const passengerAge = Number(prompt("Quanti anni ha il passeggero?"));
// console.log(numberOfKm, userAge);

// prezzo del biglietto al km
const priceAtKm = 0.21;

// creo una variabile per il prezzo finale
let ticketFinalPrice

/**
 * 
 * @param {number} numberOne number of the km 
 * @param {number} numberTwo passenger age 
 * @returns {number} final price
*/
function ticketPrice(numbOne, numbTwo) {

    // prezzo base
    let basePrice = numberOfKm * priceAtKm;

    if (numbTwo < 18) { // se minorenne
        ticketFinalPrice = basePrice - (basePrice * 0.2);
    
    } else if (numbTwo >= 65) { // se over 65
        ticketFinalPrice = basePrice - (basePrice * 0.4);

    } else { // altrimenti nessuno sconto
        ticketFinalPrice = basePrice;
    }

    return ticketFinalPrice.toFixed(2);
}

console.log(`Il prezzo finale del biglietto è ${ticketPrice(numberOfKm, passengerAge)}€`);
