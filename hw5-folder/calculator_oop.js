export class Calculator {
  add(a, b) {
    this.result = a + b;
    console.log(`Vyseledek scitani ${a} + ${b} je ${this.result}`);
    return this.result;
  }

  substract(a, b) {
    this.result = a - b;
    console.log(`Vysledek odcitani ${a} - ${b} je ${this.result}`);
    return this.result;
  }

  multiple(a, b) {
    this.result = a * b;
    console.log(`Vysledek nasobeni ${a} krat ${b} je ${this.result}`);
    return this.result;
  }

  divide(a, b) {
    this.result = a / b;
    console.log(`Vysledek deleni ${a} delene ${b} je ${this.result}`);
    return this.result;
  }
}
