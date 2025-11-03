// javascript/conditions
// alcohol_eligibility.js

const actualAge = "dvacet";
const drinkingAge = 18;
const fullName = "John Doe";

if (actualAge >= drinkingAge) {
  console.log(`${fullName} uz muze pit alcohol.`); // * zpetne apostrofy (``) jsou template literal. Umoznuji vkladani vyrazu do retezce pomoci ${}
} else if (actualAge > 0) {
  console.log(
    `${fullName} jeste nemuze pit alcohol, chybi mu ${
      drinkingAge - actualAge
    } roky/let.`
  );
} else {
  console.log("CHYBA: aktualni vek muze byt jenom kladne cislo!");
}
