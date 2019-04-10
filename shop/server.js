const express = require('express');
const app = express()
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

// initialize ejs template engine
app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');

// initialize SQLite with database 'shop.db'
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('shop.db');

// Webserver starten http://localhost:3000
app.listen(3000, function(){
	console.log("listening on 3000");
});

// Neuer Artikel-Formular anzeigen
app.get("/neuerArtikel", function(req, res){
	res.render('neuerArtikel');
});

// Formulareingabe auswerten
app.post("/onNeuerArtikel", function(req, res){
	const artikelName = req.body.artikelName;
	const artikelPreis = req.body.artikelPreis;
	console.log(artikelName);
	console.log(artikelPreis);

	// Datensatz in Tabelle produkte einfügen
	const sql = `INSERT INTO produkte (name, preis) 
		VALUES ('${artikelName}', ${artikelPreis})`;
	console.log(sql);
	db.run(sql, function(err){
		res.redirect("/alleArtikel");
	});
	 
});

// Alle Artikel anzeigen
app.get("/alleArtikel", function(req, res){
	const sql = "SELECT * FROM produkte";
	db.all(sql, function(err, rows){
		if (err){
			console.log(err.message);
		}
		else {
			res.render("alleArtikel", {rows: rows});
		}
	});
});

// einen Artikel löschen
app.get("/onArtikelLoeschen/:id", function(req, res){
	const id = req.params.id;
	const sql = `DELETE FROM produkte WHERE id=${id}`;
	db.run(sql, function(err){
		res.redirect("/alleArtikel");
	});

});