
let Chilometri = prompt('inserisci i chilometri')
Chilometri = parseInt(Chilometri)
console.log(Chilometri)

prezzoBase = 0.21
prezzoViaggio = prezzoBase * Chilometri
console.log(prezzoViaggio)

const Eta = prompt('inserisci la tua eta')
console.log(Eta)

scontoMinorenne = prezzoViaggio * 0.2
scontoAnziano = prezzoViaggio * 0.4


let prezzoFinale = ''

if (Eta < 18) [
    prezzoFinale = prezzoViaggio - scontoMinorenne
]
else if (Eta > 65) [
    prezzoFinale = prezzoViaggio - scontoAnziano
]
else [
    prezzoFinale = prezzoViaggio
]

console.log(prezzoFinale)


const priceElement = document.getElementById('prezzo')
console.log(priceElement)
priceElement.innerHTML = prezzoFinale + '&#8364'

