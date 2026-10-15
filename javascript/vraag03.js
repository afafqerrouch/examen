function prijsVanMaat(maat) {
  switch (maat) {
    case "small":
      return 2.5;

    case "medium":
      return 3.2;

    case "large":
      return 3.9;

    default:
      return 0;
  }
}

const maten = ["small", "large", "mega"];
for (const maat of maten) {
  const kost = prijsVanMaat(maat);
  console.log(`${maat}: € ${kost.toFixed(2)}`);
}
