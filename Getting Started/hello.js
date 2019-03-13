console.log("Hello World!");

// Variablen mit konstantem Wert
const begruessung = "Moin";
console.log(begruessung);
// geht nicht, weil const deklariert
// begruessung = "Guten Morgen";

// Variable mit veränderlichem Wert
let wochentag = "Mittwoch";
console.log(wochentag);
wochentag = "Dienstag";
console.log(wochentag);

// "altes Javascript": Deklaration mit var
// sollte möglichst nicht mehr verwendet werden
var monat = "März";
console.log(monat);

// Strings zusammenfügen
console.log("Heute ist " + wochentag + "!");
console.log('Heute ist Mittwoch');
// Template String
console.log(`Heute ist ${wochentag}?`);

// for-Schleife
for (let i = 0; i < 10; i++){
    console.log(`${i+1}-ter Schleifendurchlauf`);
}

// Objekt
let fixie = {};
fixie.type = "Fixie";
fixie.gears = 1;
fixie.color = "black";
console.log(fixie);
fixie.gears = 3;
console.log(fixie);

// JSON-Notation (Javascript Object Notation)
let gazelle = {
    type: 'Gazelle',
    gears: 3,
    color: 'yellow'
};
console.log(gazelle.color);

// Arrays
let numbers = [5, 7, -1, 3];
console.log(numbers);
numbers.push(19);
console.log(numbers);
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
// for of Schleife
for(number of numbers){
    console.log(number);
}
let leeresArray = [];

// Funktionen
function addieren(a, b){
    const summe = a + b;
    return summe;
}
console.log(addieren(5, 7));

// Array von Objekten
let bicycles = [
    {type: 'Fixie', gears: 1, color: 'black'},
    {type: 'Giro', gears: 33, color: 'silver'},
    {type: 'Gazelle', gears: 1, color: 'yellow'}
];

function finde(liste, type){
    for (element of liste){
        if (element.type == type){
            return element;
        }
    }
    return {};
}
console.log(finde(bicycles, "Giro"));