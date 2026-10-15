const origines = ["Brazilië", "Ethiopië", "Colombia"];

origines.push("Kenia");
origines.unshift("Peru");
origines.splice(origines[1]);
console.log(origines);
console.log(`Aantal origines: ${origines.length}`);

const zoek = "Ethiopië";
const index = origines.indexOf("Ethiopië");

if (index !== -1) {
  console.log(`${zoek} staat niet in de lijst`);
} else {
  console.log(`${zoek} staat op index ${index}`);
}
