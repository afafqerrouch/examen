const prijs = 3.4;
let koffiekaart = 20;
let aantalKoffies = 0;

while (koffiekaart >= prijs) {
  koffiekaart -= prijs;
  aantalKoffies++;
}

console.log(`Je kunt ${aantalKoffies} koffies kopen`);
console.log(`Restsaldo: €${koffiekaart.toFixed(2)}`);
