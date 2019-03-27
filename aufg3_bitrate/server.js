const express = require('express');
const app = express(); 

// EJS Template Engine
app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');

// Initialisierung body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));


app.listen(3000, function(){
     console.log('listening on 3000'); 
}); 

app.get('/hello', function(req, res){
     res.render('form'); 
});

app.post('/berechnen',function(req,res){
     const bitrate = req.body['bitrate'];
     const dauer = req.body.dauer;

     if (bitrate < 0 || dauer < 0) 
     {
          //Ein Fehler ist aufgetreten, also sende ich kein Result mit
          res.render('result',{bitrate:bitrate,dauer:dauer});
     }
     else{
          //Die Eingabe ist korrekt, also berechne ich das ergebnis und sende es mit
          const result = bitrate*dauer/8;
          res.render('result', {bitrate:bitrate,dauer:dauer,result:result});
     }
});