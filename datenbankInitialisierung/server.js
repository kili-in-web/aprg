//mkdir of the directory of the db if it's not already existing
var fs = require('fs');
if(!fs.existsSync('./db')){
  fs.mkdirSync('./db')
}

// Datenbank initialisieren
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('db/shop.db', (error) => {
  if(error){
    console.log(error.message);

  } else {
    console.log('connected to the database');
  }
});

// Express.js Webserver
const express = require('express');
const app = express()


// EJS Template Engine
app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');

// Webserver starten http://localhost:3000
app.listen(3000, function(){
	console.log("listening on 3000");
});

// ================================================================//


app.get(['/'], function(req, res) {
	 res.render('login');
});

let sql = `SELECT * FROM produkte`;
db.all(sql, (error,rows) => {
  if (error){
    if(rows == null){
      db.run(`CREATE TABLE produkte (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, preis NUMERIC NOT NULL, anzahl INTEGER NOT NULL, farbe TEXT NOT NULL)`,(error)=>{
          if(error){
            console.log(error.message);
          }
          else{
            console.log('Initialized table produkte');
          }
      });
    }
  }
});

sql = `SELECT * FROM kunden`;
db.all(sql, (error,rows) => {
  if (error){
    if(rows == null){
      db.run(`CREATE TABLE kunden (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)`,(error)=>{
          if(error){
            console.log(error.message);
          }
      });
      console.log('Initialized table kunden');
    }
  }
});
