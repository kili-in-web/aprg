// Initialisierung der Module
const express = require("express");
const app = express();
// Body-Parser zur Auswertung von Formularen
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
// Template-Engine EJS
app.engine(".ejs", require("ejs").__express);
app.set("view engine", "ejs");
// Server starten
app.listen(3000, function(){
    console.log("listening on 3000");
});

// Eingabeformular anzeigen
app.get("/", function(req, res){
    res.sendFile(__dirname + "/eingabe.html");
});

let studis = [];
// Formularauswertung
app.post("/studiEingabe", function(req, res){
    console.log(req.body);
    const studiname = req.body.studiname;
    const studiengang = req.body.studiengang;
    const semester = req.body.semester;

    const studiObject = {
        studiname: studiname,
        studiengang: studiengang,
        semester: semester
    };
    studis.push(studiObject);
    // res.render("einenStudiZeigen", studiObject);
    res.render("alleStudisZeigen", {list: studis});
});