
// Chiedo all’utente il numero di chilometri che vuole percorrere
var numKm = prompt("Il numero dei Km che vuoi percorrere?");

// Chiedo all’utente l’età del passeggero.
var passengerAge = prompt("L'età del passeggero?");

// Definisco il prezzo per 1 km
var price1Km = 0.21;

// Definisco il prezzo totale
var totPrice = numKm * 0.21;


// Condizione per determinare se ha diritto ad uno sconto
if (passengerAge < 18) {
  // Se è minorenne lo sconto è del 20%
  totPrice = (totPrice - (totPrice * 0.2)).toFixed(2);
} else if (passengerAge >= 65){
  // Se è over 65  lo sconto è del 40%
  totPrice = (totPrice - (totPrice * 0.4)).toFixed(2);
}

document.getElementById('numofkm').innerHTML = numKm;
document.getElementById('agepass').innerHTML = passengerAge;
document.getElementById('price').innerHTML = totPrice;




// console.log("Numero Km = " + numKm + " Km");
// console.log("Età passeggero = " + passengerAge + " anni");
// console.log("prezzo totale = " + totPrice + " €");
