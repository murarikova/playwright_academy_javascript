const pocetBoduStudenta = 90;
const jmenoStudenta = "Ferko Mrkvicka";

const minimumProUspech = 75;

const podminkaProCervenyDiplom = 95;

if (pocetBoduStudenta >= podminkaProCervenyDiplom) {
  console.log(`Gratulujeme, ${jmenoStudenta}, ziskal jsi cerveny diplom!`);
} else if (pocetBoduStudenta >= minimumProUspech) {
  console.log(`Gratulujeme, ${jmenoStudenta}, uspesne jsi zakoncil studium!`);
} else {
  console.log(
    `Bohuzel, ${jmenoStudenta}, k uspesnemu zakoncení studia ti chybi ${
      minimumProUspech - pocetBoduStudenta
    } bodu.`
  );
}
