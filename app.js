var express = require("express");

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })


var app = express();

// middleware
// app.use('/assets', function(req, res, next){
//     console.log("responed")
//     next();
// })

app.use('/assets', express.static('assets'))

app.set('view engine', 'ejs');
app.listen(3000);                

app.get('/', function(req, res){
    res.send("Halo!!!");
})

app.get('/contact',function(req, res){
    res.send("this is contact page");
    // res.sendFile("index.html")
})
// get = app.get(route, fn)
// post = app.post(route, fn)
//  delete = app.delete(route, fn)


app.get('/profile/:id', function(req, res){
    var data = {
        name: "Ujjal",
        Job: "computer Engineer",
        hobbies: ['listening songs', 'rapping', 'DJing', "GOogling"]
    }
    res.render("index", {person :req.params.id , data:data});
})



// query strings

app.get('/query',function(req, res){
     res.render("query",{qs: req.query});
})

app.post('/query', urlencodedParser, function(req, res){
    res.render("sucess", {data : req.body});
})

