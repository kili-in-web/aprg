const express = require('express');
const app = express()


const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))


// EJS Template Engine initialisieren
app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');

app.listen(3000, function() {
  console.log('listening on 3000')
});

// Sessions initialisieren
const session = require('express-session');
app.use(session({ 
	secret: 'example',
	resave: false,
	saveUninitialized: true
}));

// Sessionvariable setzen
app.get('/sessionSetzen', function(req, res){
	req.session['sessionValue'] = Math.floor(Math.random()*100);
	res.redirect('/index');
});

// Sessionvariable löschen
app.get('/sessionLoeschen', function(req, res){
	delete req.session['sessionValue'];
	res.redirect('/index');
});

// Sessionvariable anzeigen
app.get('/index', function(req, res){
	if (!req.session['sessionValue']){
		res.render('index', {message: "Sessionvariable nicht gesetzt"});
	}
	else{
		res.render('index', {message: `Wert der Sessionvariable:
				${req.session['sessionValue']}`});
	}
});