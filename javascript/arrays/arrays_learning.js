const cities = ["Praha", "Brno", "Ostrava", "Plzeň"]; // Array ( pole ) => seznam hodnot uložených pod jedním názvem a pise se v hranatych závorkách
console.log(cities);
console.log("Druhe mesto: " + cities[1]); // pristup k druhemu prvku pole (indexovani zacina od 0)
cities.push("Liberec"); // pridani nove hodnoty na konec pole
console.log(cities);

for (let i = 0; i < 4; i++) {
  console.log("Mesto: " + cities[i]); // ! nevypsalo páté město, protože i < 4
}

for (let i = 0; i < cities.length; i++) {
  console.log("Mesto: " + cities[i]); // ! vypsalo všechna města, protože i < cities.length
}
