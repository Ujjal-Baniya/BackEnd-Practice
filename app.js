var express = require("express");


var app = express();

app.listen(3000);                

app.get('/', function(req, res){
    res.send("Halo!!!")
})

app.get('/contact',function(req, res){
    res.send("this is contact page")
})
// get = app.get(route, fn)
// post = app.post(route, fn)
//  delete = app.delete(route, fn)
