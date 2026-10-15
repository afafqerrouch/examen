const prijs = 3.2;

// klant heeft stempelkaart
//elke 5de koffie =gratis
//koffie =3.20
//klant drinkt deze maand 12 koffie
//dus koffie 5, 10= gratis

let totaal = 0;

for (let aantal = 1; aantal <= 12; aantal++) {
  if (aantal % 5 === 0) {
    console.log(`Koffie ${aantal}: (gratis)`);
  } else {
    totaal += prijs;
    console.log(`Koffie ${aantal}: € ${prijs.toFixed(2)}`);
  }
}
console.log(`Totaal te betalen: € ${totaal.toFixed(2)}`);
