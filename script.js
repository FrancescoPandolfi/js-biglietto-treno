
// Chiedo all’utente il numero di chilometri che vuole percorrere
var numKm = prompt("Il numero dei Km che vuoi percorrere?");

// Chiedo all’utente l’età del passeggero.
var passengerAge = prompt("L'età del passeggero?");

// Definisco il prezzo per 1 km
var price1Km = 0.21;

// Definisco il prezzo totale da 18 ai 65 anni
var totPrice = numKm * 0.21;

// Condizione per determinare se ha diritto ad uno sconto
if (passengerAge < 18) {
  // Se è minorenne lo sconto è del 20%
  var totPriceUnder18 = (totPrice - (totPrice * 0.2)).toFixed(2);
} else if (passengerAge >= 65){
  // Se è over 65 compreso lo sconto è del 40%
  var totPriceOver65 = (totPrice - (totPrice * 0.4)).toFixed(2);
}

console.log(totPrice);
console.log(totPriceUnder18);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.

// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
