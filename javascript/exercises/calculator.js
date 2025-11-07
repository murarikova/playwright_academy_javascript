/** function add(a, b) {
  console.log("Soucet je : " + (a + b));
}

function subtract(a, b) {
  console.log("Rozdil je : " + (a - b));
}

function multiply(a, b) {
  console.log("Nasobeni je : " + a * b);
}

function divide(a, b) {
  console.log("Deleni je : " + a / b);
}

add(15, 48);
subtract(98, 41);
*/

function add(a, b) {
  const result = a + b;
  console.log(`${a} + ${b} = ${result}`);
}

function substract(a, b) {
  const result = a - b;
  console.log(`${a} - ${b} = ${result}`);
}

const multiply = (a, b) => {
  const result = a * b;
  console.log(`${a} * ${b} = ${result}`);
};

const divide = (a, b) => {
  const result = a / b;
  console.log(`${a} / ${b} = ${result}`);
};

add(15, 48);
substract(98, 41);
multiply(54, 30);
divide(88, 6);
