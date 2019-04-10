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

