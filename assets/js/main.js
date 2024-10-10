// seleziono il valore dell'input del form
const numberOfKmEl = document.getElementById("number-of-km");
const passengerAgeEl = document.getElementById("passenger-age");
const passengerNameEl = document.getElementById("passengerName");

// seleziono il form dalla DOM
const formEL = document.querySelector("form");

// seleziono la card dalla DOM
const cardsEL = document.querySelector(".col-7");

// seleziono le classi colonne da modificare
const colEl = document.querySelector(".col-12");

// prezzo del biglietto al km
const priceAtKm = 0.21;

// event listener
formEL.addEventListener("submit", function(e) {
    e.preventDefault();

    // recupero l'input value
    const passengerNameValue = passengerNameEl.value;
    const numberOfKmValue = Number(numberOfKmEl.value);
    const passengerAgeValue = Number(passengerAgeEl.value);

    // prezzo base
    let basePrice = numberOfKmValue * priceAtKm;

    // creo una variabile per il prezzo finale e per il tipo di offerta
    let ticketFinalPrice;
    let typeOfOffer;

    // controllare se l'età del passeggero e i km sono maggiori di 0
    if (passengerAgeValue > 0 && numberOfKmValue > 0 && passengerNameValue.length > 0) {
        // se la verifica è andata a buon fine e i dati sono corretti, procedo con il calcolo del biglietto in base all'età

        if (passengerAgeValue < 18) { // se minorenne
            ticketFinalPrice = basePrice - (basePrice * 0.2);
            typeOfOffer = "Biglietto junior";

        } else if (passengerAgeValue >= 65) { // se over 65
            ticketFinalPrice = basePrice - (basePrice * 0.4);
            typeOfOffer = "Biglietto senior";

        } else { // altrimenti nessuno sconto
            ticketFinalPrice = basePrice;
            typeOfOffer = "Biglietto standard";
        };
        // dopo il calcolo del biglietto procedo con il generare il biglietto completo

        // richiamo la funzione per generare due numeri casuali
        const carriageNumber = getRndInteger(1, 10);
        const tripCodeNumber = getRndInteger(50000, 99999);
    
        // cambio la classe della colonna del forum per farla rimpicciolire quando si genera il biglietto
        colEl.classList.replace("col-12", "col-5");
    
        // inserisco il markup da inserire nell'HTML con le variabili che rappresentano i dati dell'utente
        const markup = generateTicketMarkup(passengerNameValue, typeOfOffer, carriageNumber, tripCodeNumber, ticketFinalPrice);
        
        // aggiungo il markup all'HTML
        cardsEL.insertAdjacentHTML("afterbegin", markup);

    } else { // se i dati non sono corretti, resetto il form e esco dalla funzione
        alert("Dati non validi, riprova");
        formEL.reset();
        return;
    };
});

// funzione per il markup da inserire nell'HTML
function generateTicketMarkup(fullName, offerType, wagon, tripCode, finalPrice) {
    return `
        <div class="card w-100" style="width: 18rem;">
            <div class="card-body border border-warning-subtle border-1 rounded-2" style="background-color: #FFFBE9;">
                <h5 class="card-title mb-3">${fullName}</h5>
                <hr>
                <div class="row mb-3">
                    <div class="col-6">
                        <span class="fw-bold">Offerta</span>
                    </div>
                    <div class="col-6">
                        <span>${offerType}</span>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-6">
                        <span class="fw-bold">Carrozza</span>
                    </div>
                    <div class="col-6">
                        <span>${wagon}</span>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-6">
                        <span class="fw-bold">Codice viaggio</span>
                    </div>
                    <div class="col-6">
                        <span>${tripCode}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <span class="fw-bold">Prezzo biglietto</span>
                    </div>
                    <div class="col-6">
                        <span>${finalPrice.toFixed(2)}€</span>
                    </div>
                </div>
            </div>
        </div>
    `;
};

// funzione per generare due numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};