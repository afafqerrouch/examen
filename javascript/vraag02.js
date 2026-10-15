function beoordeelTemperatuur(graden) {
  if (graden < 60) {
    return "Te koud";
  } else if (graden >= 60 && graden <= 70) {
    return "perfect";
  } else if (graden > 70) {
    return "Te heet ";
  } else {
    return "ongeldige invoer";
  }
}
console.log(beoordeelTemperatuur(55));
console.log(beoordeelTemperatuur(65));
console.log(beoordeelTemperatuur(70));
console.log(beoordeelTemperatuur(82));
console.log(beoordeelTemperatuur("warm"));
