const prijzen = [2.5, 4.8, 3.2, 5.5, 3.9, 2.9];
const duur = prijzen.filter((p) => p < 4);

const BTW_TARIEF = 0.12;
const horecaTarief = duur.map((p) => p * (1 + BTW_TARIEF));
console.log(horecaTarief.map((p) => p.toFixed(2)).join(" | "));
const totaal = prijzen.reduce((som, p) => som + p, 0);

console.log(`Som: ${totaal.toFixed(2)}`);
