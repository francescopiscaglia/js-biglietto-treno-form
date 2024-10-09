// seleziono il valore dell'input
const numberOfKmEl = document.getElementById("number-of-km");
const passengerAgeEl = document.getElementById("passenger-age");

// seleziono l'input submit dalla DOM
const formEL = document.querySelector("form");

// event listener
formEL.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // recupero l'input value
    const numberOfKmValue = numberOfKmEl.value;
    const passengerAgeValue = passengerAgeEl.value;
    console.log(passengerAgeValue, numberOfKmValue);
    
    // prezzo del biglietto al km
    const priceAtKm = 0.21;
    
    // prezzo base
    let basePrice = numberOfKmValue * priceAtKm;

    // creo una variabile per il prezzo finale
    let ticketFinalPrice

    if (passengerAgeValue < 18) { // se minorenne
        ticketFinalPrice = basePrice - (basePrice * 0.2);
    
    } else if (passengerAgeValue >= 65) { // se over 65
        ticketFinalPrice = basePrice - (basePrice * 0.4);

    } else { // altrimenti nessuno sconto
        ticketFinalPrice = basePrice;
    }

    console.log(`Il prezzo del biglietto è di ${ticketFinalPrice.toFixed(2)}€`);
})