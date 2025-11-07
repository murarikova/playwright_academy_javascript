import { CarBlueprint } from "./car_blueprint.js";

const dieselCar = new CarBlueprint(
  "cervena",
  "2.0 TDI",
  "diesel",
  "Volkswagen Passat"
);

dieselCar.logCarProperties();

const electricCar = new CarBlueprint("modra", "EV 160kW", "Elektrina", "Blesk");
electricCar.logCarProperties();
dieselCar.logCarProperties();

dieselCar.repaint("seda"); // * prebarveni auta. Ale bylo prebarveno jenom auto dieselCar
dieselCar.logCarProperties();
electricCar.logCarProperties();

const dieselCarEngine = dieselCar.getEngine();
console.log(`Motor auta ${dieselCar.carName} je: ${dieselCarEngine}`);
