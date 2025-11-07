// * car_blueprint.js (tento otevreme)

export class CarBlueprint {
  constructor(color, engine, fuel, carName) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.carName = carName;
    this.wheels = 4; // *  vsechny auta maji 4 kola. Rovnaka vlastnost pro vsechny instance
    console.log(
      `Auto "${this.carName}" bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuel}\n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`
    ); // * Escape Characters: \n, vypsání uvozovek v textu: "Petr řekl \"Budiž Escape Characters\""
  }

  logCarProperties() {
    console.log(
      `Informace o autě: ${this.carName}: \n\t motor: ${this.engine}, palivo: ${this.fuel}, barva: ${this.color}, počet kol: ${this.wheels}`
    );
    this.logDivider();
  }

  logDivider() {
    console.log("------------------------");
  }

  repaint(newColor) {
    const oldColor = this.color; // * ulozeni puvodni barvy do promenne
    this.color = newColor;
    console.log(
      `Auto "${this.carName}" bylo prebarveno z "${oldColor}" na "${this.color}"`
    );
    this.logDivider();
  }

  getEngine() {
    return this.engine; // ? return vraci hodnotu jako vysledek metody/funkce
    // ! za prikazem return se jiz neprovadi zadne prikaze (je to finalni krok funkce/metody)
    console.log("Toto se jiz nevypise");
  }
}
