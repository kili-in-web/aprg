const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('shop.db');

// Lesen von Datensätzen
db.all("SELECT * FROM produkte", function(err, rows){
    for (row of rows){
        const produktNr = row.produktNr;
        const name = row.name;
        const preis = row.preis;
        console.log(`Nr: ${produktNr}, Name: ${name}, Preis: ${preis}`);
    }
});

// Einfügen von Datensätzen
const produkt = "Webcam";
const preis = 24.99;
const sql = `INSERT INTO produkte (name, preis) VALUES('${produkt}', ${preis})`;
db.run(sql, function(err){
    const insertedID = this.lastID;
    console.log(insertedID);
});