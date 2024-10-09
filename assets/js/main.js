// seleziono il valore dell'input
const numberOfKmEl = document.getElementById("number-of-km");
const passengerAgeEl = document.getElementById("passenger-age");
const passengerNameEl = document.getElementById("passengerName");

// seleziono l'input submit dalla DOM
const formEL = document.querySelector("form");

// seleziono la card body dalla DOM
const cardsEL = document.querySelector(".col-7");

// seleziono le classi colonne da modificare
const colEl = document.querySelector(".col-12");
console.log(colEl);

// event listener
formEL.addEventListener("submit", function (e) {
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

    // generate a random number
    let carriageNumber = Math.floor((Math.random() * 10) + 1);
    let tripCodeNumber = Math.floor((Math.random() * 99999) + 1);

    // cambiare la classe della colonna del forum per farla rimpicciolire
    colEl.classList.replace("col-12", "col-5");

    const tripInfoEl = `
    <div class="card w-100" style="width: 18rem;">
        <div class="card-body border border-warning-subtle border-1 rounded-2" style="background-color: #FFFBE9;">
            <h5 class="card-title mb-4">${passengerNameValue}</h5>
            <hr>
            <div class="row mb-4">
                <div class="col-6">
                    <span class="fw-bold">Offerta</span>
                </div>
                <div class="col-6">
                    <span>${typeOfOffer}</span>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-6">
                    <span class="fw-bold">Carrozza</span>
                </div>
                <div class="col-6">
                    <span>${carriageNumber}</span>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-6">
                    <span class="fw-bold">Codice viaggio</span>
                </div>
                <div class="col-6">
                    <span>${tripCodeNumber}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <span class="fw-bold">Prezzo biglietto</span>
                </div>
                <div class="col-6">
                    <span>${ticketFinalPrice.toFixed(2)}€</span>
                </div>
            </div>
        </div>
    </div>
    `;

    cardsEL.insertAdjacentHTML("beforeend", tripInfoEl);
});