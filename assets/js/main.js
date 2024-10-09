// seleziono il valore dell'input
const numberOfKmEl = document.getElementById("number-of-km");
const passengerAgeEl = document.getElementById("passenger-age");

// seleziono l'input submit dalla DOM
const formEL = document.querySelector("form");

// seleziono la card body dalla DOM
const cardsEL = document.querySelector(".card-body");

const passengerNameEl = document.getElementById("passengerName");

// event listener
formEL.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // recupero l'input value
    const passengerNameValue = passengerNameEl.value;
    const numberOfKmValue = Number(numberOfKmEl.value);
    const passengerAgeValue = Number(passengerAgeEl.value);
    
    // prezzo del biglietto al km
    const priceAtKm = 0.21;
    
    // prezzo base
    let basePrice = numberOfKmValue * priceAtKm;

    // creo una variabile per il prezzo finale
    let ticketFinalPrice

    // creo una variabile per il tipo di offerta
    let typeOfOffer;

    // controllare se l'età del passeggero e i km sono maggiori di 0
    if (passengerAgeValue > 0 && numberOfKmValue > 0) {

        if (passengerAgeValue < 18) { // se minorenne
            ticketFinalPrice = basePrice - (basePrice * 0.2);
            typeOfOffer = "Biglietto scontato del 20%";

        } else if (passengerAgeValue >= 65) { // se over 65
            ticketFinalPrice = basePrice - (basePrice * 0.4);
            typeOfOffer = "Biglietto scontato del 40%"
    
        } else { // altrimenti nessuno sconto
            ticketFinalPrice = basePrice;
            typeOfOffer = "Biglietto standard"
        }

    } else {
        alert("Dati non validi")
    }

    const tripInfoEl = `
    <h5 class="card-title mb-4">${passengerNameValue}</h5>
    <hr>
    <div class="row mb-4">
        <div class="col-6">
            <span>Offerta</span>
        </div>
        <div class="col-6">
            <span>${typeOfOffer}</span>
        </div>
    </div>
    <div class="row mb-4">
        <div class="col-6">
            <span>Carrozza</span>
        </div>
        <div class="col-6">
            <span>5</span>
        </div>
    </div>
    <div class="row mb-4">
        <div class="col-6">
            <span>Codice viaggio</span>
        </div>
        <div class="col-6">
            <span>93929</span>
        </div>
    </div>
    <div class="row mb-4">
        <div class="col-6">
            <span>Prezzo biglietto</span>
        </div>
        <div class="col-6">
            <span>${ticketFinalPrice}</span>
        </div>
    </div>`;


});