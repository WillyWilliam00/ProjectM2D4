// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const sara = {
  name: "Sara",
  lastName: "Bianchi",
  isAmbassador: true,
}

const Andrea = {
  name: "Andrea",
  lastName: "Rossi",
  isAmbassador: true,
}


let carrello = 0
const prices = [34, 50, 20, 10]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!

// creo un ciclo for per sommare i prezzi

for (let i2 = 0; i2 < prices.length; i2++ ) {
  carrello += prices[i2]
}

// nel primo IF verifico se ambassador = true -> sconto del 30%
// nel secondo IF se "carrello" > 100 spedizione gratuita, altrimenti aggiungo const shippingCost

if (utenteCheEffettuaLAcquisto.isAmbassador) {
 carrello -= (carrello*0.3)
 console.log("complimenti! hai il 30 % di sconto!")
}
if (carrello > 100) {
  console.log("Hai la spedizione gratuita! il totale è:", carrello)
} else {
  carrello += shippingCost 
  console.log("il totale è:", carrello) 
}

// creo un array con tutti gli utenti

const utenti = []

utenti.push(marco,paul,amy,sara,Andrea)


console.log(utenti)

// creo un ciclo for dove se isAmbassador = true mostra "è un ambassador" altrimenti mostra "non è un ambassador" x
// ciascun utente dell'array 

for (let i = 0; i < utenti.length; i++ ) {
  if (utenti[i].isAmbassador) {
    console.log(utenti[i].name, utenti[i].lastName, "è un ambassador")

  } else {
    console.log(utenti[i].name, utenti[i].lastName, "non un ambassador")
  }
}

// creo un array tramite ciclo for in cui se isAmbassador = true l'utente viene caricato nell'array tramite utentiambassador.push(utenti[y])

const utentiambassador = []

for (let y = 0; y < utenti.length; y++) {

  if (utenti[y].isAmbassador) {
    utentiambassador.push(utenti[y])
  }
}

console.log(utentiambassador)


