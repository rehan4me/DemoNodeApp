var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Welcome Mr.Syed Hussain');
})

app.listen(4000)