// ------------------------------------------------------ //
console.log("------------ Aufgabe 1 - Mehrwertsteuer");

function berechneMehrwertsteuer(mehrwertwsteuer, preis){
    return preis * mehrwertsteuer/100;
}

const preis = 2.00;
const mehrwertsteuer = 19;
console.log(berechneMehrwertsteuer(mehrwertsteuer, preis));

// ------------------------------------------------------ //
console.log("------------ Aufgabe 2 - SQL Strings");

function makeSqlString(tabelle, produktname){
    return `SELECT * FROM ${tabelle} WHERE name=${produktname}`;
}
console.log(makeSqlString("produkte", "Seagate"));

// ------------------------------------------------------ //
console.log("------------ Aufgabe 3 - Arrays, Schleifen");

  
let lebensenergie = [
    {name: "Alice", energie: 95},
    {name: "Bob", energie: 45},
    {name: "Carla", energie: 75}
];
for(spieler of lebensenergie){
    console.log(`Spieler: ${spieler.name}, Energie: ${spieler.energie}`);
}
function getNamensListe(lebensenergieListe){
    let namensListe = [];
    for (spieler of lebensenergieListe){
        namensListe.push(spieler.name);
    }
    return namensListe;
}
console.log(getNamensListe(lebensenergie));

