let firstName = "Andrea"; //? deklarace proměnné pro jméno
let lastName; //? deklarace proměnné pro příjmení bez přiřazené hodnoty => undefined

lastName = "Murarikova"; //? inicializace proměnné přiřazením hodnoty

console.log(firstName); //? vypíše hodnotu proměnné firstName
console.log(firstName + " " + lastName); //? vypíše celé jméno pomocí konkatenace => slouceni vice stringu + pridani mezery

firstName = "Alzbeta"; //? přepsání hodnoty proměnné firstName => reinicializace
console.log(firstName);
console.log(firstName); //* alt+shift+sipka dole => duplikuje radky
//* oznacen radek alt+sipka nahoru/dolu => presune radek

firstName = "Katerina"; //? přepsání hodnoty proměnné firstName => reinicializace
console.log(firstName);

// * vlastnosti promennych var, let, const
// * Promenna let
let city; //? muzu jen deklarovat bez inicializace
// let city; //! Promennou let nemuzu redeklarovat (vytvorit znovu), napise chybu: Cannot redeclare block-scoped variable 'city'

{
  //? let se deklaruje v bloku, cozn znamena, ze pokud promennou vytvorim uvnitr bloku, tak existuje jen uvnitr tohoto bloku (nelze jie pouzit mimo blok). Blok = slozky {}
  let cityInBlock = "Brno";
  console.log(cityInBlock); //? vypise hodnotu promenne cityInBlock
}
// console.log(cityInBlock); //! nelze pouzit mimo blok, napise chybu: Cannot find name 'cityInBlock'

// * Promenna var
//! Tuto promennou uz dnes neni doporuceno pouzivat, protoze ma nepredvidatelne chovani
var river;
river = "Vltava";
{
  var username = "Jan"; // ! promenna var se deklaruje v bloku, ale na rozdil od let je dostupna i mimo blok. Deklaruje se pro modul (vetsinou je to soubor)
}
console.log(username);
var river = "Morava"; //! promenna var muze byt redeklarovana (vytvorena znovu) bez chyby => riziko prepsani hodnoty promenne

// * Promenna const
const email = "andrea@test.cz"; //? deklarace a inicializace promenne const, musi byt inicializovana pri vytvoreni
// country = "Slovakia"; //! promenna const nemuze byt reinicializovana (prepsana), napise chybu: "const" declaration must be inicialized.
// const country = "Slovakia"; //! promenna const nemuze byt redeklarovana (vytvorena znovu)
{
  const country = "Czechia"; //? promenna const je dostupna pro blok
}
console.log(city); // ! nelze volat prommennou mimo blok

/*
vice 
radkova 
poznamka
*/

/**
 * technicky vzto je to viceradkova poznamka
 * Jedna se ale o tzv. JSDoc poznamku, ktera se vyuziva pro dokumentaci kodu
 * Lze do ni pridat specialni tagy, ktere pomahaji s generovanim dokumentace nebo s lepsim pochopenim kodu
 *
 * Navic lze formatovat, napriklad **tucne** nebo *kurziva*
 *
 * Nebo kod
 * ```js
 * console.log("Ahoj");
 * ```
 */
function greet() {}
