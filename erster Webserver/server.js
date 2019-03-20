// Initialisierung Express
const express = require('express');
const app = express();

// Webserver starten (Abbruch mit Strg-C in der Konsole)
const port = 3000;
app.listen(port, function() {
    console.log("Listening on 3000");
});

// Anfrage /hello bearbeiten
// app.get(request, callback);
// Aufruf im Webbrowser: http://localhost:3000/hello
app.get('/hello', function(req, res){
    res.send(`
        <html>
            <head>
                <title>Hello World</title>
            </head>
            <body>
                <h1>Erste Webseite</h1>
            </body>
        </html>
    `);
});

// HTML-Dateien im Ordner public "sichtbar" machen
app.use(express.static(__dirname + '/public'));

app.get('/abmelden', function(req, res){
    res.send("abgemeldet");
});


