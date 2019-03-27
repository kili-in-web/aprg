// Initialisierung des Servers
const express = require('express');
const app = express()
app.use(express.static(__dirname + '/public'))

// wird mit 'npm install body-parser --save' installiert
// Middlerware zum Auslesen der Parameter aus dem Formular
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');


app.listen(3000, function() {
  console.log('listening on 3000')
});

app.get('/', function(req, res){
	res.sendFile(__dirname + "/eingabe.html");
})

// Beispiel: form.html --> Abfrage Vor-, Nachname
// Antwort: Guten Morgen...
var studis = [];
app.post('/dateneingabe', function(req, res){
	console.log(req.body);

	const name = req.body["name"];	// holt die Werte aus dem Formular
	const studiengang = req.body["studiengang"];
	const semester = req.body["semester"];

	studis.push({name:name, studiengang: studiengang, semester: semester});
//	res.send(`Name: ${name}, Studiengang: ${studiengang}, Semester: ${semester}`);
//	res.render("alleStudisZeigen", {liste: studis});
	res.redirect('/alleStudisZeigen');

});
app.get('/alleStudisZeigen', function(req, res){
	res.render("alleStudisZeigen", {liste: studis});
})
app.get('/detailsZeigen', function(req, res){
	const index = req.query.index;
	res.render("detailsZeigen", {studi: studis[index]});
});
