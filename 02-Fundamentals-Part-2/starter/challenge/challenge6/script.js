//Sixth Challenge

// Definisci i dati di test
const bills = [125, 555, 44];
const tips = [];
const totals = [];

// Funzione per calcolare la mancia
function calcTip(billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return (billValue * 15) / 100;
    } else {
        return (billValue * 20) / 100;
    }
}

// Calcola le mance e i totali per ogni fattura
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);
