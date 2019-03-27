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

app.post('/tabelle',function(req,res){
     res.render('tabelle',{rows:req.body.rows,columns:req.body.columns})
});