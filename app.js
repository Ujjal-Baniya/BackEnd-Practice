//events emitter//
// var events = require("events");
// var util = require("util")

// var myemitter =  new events.EventEmitter();

// myemitter.on('somevent' , function(mssg){
//     console.log(mssg);
// })


// myemitter.emit('somevent', 'helllo');

// var person = function(name){
//     this.name = name;
// };

// util.inherits(person, events.EventEmitter);
// var james = new person('james');
// var ram = new person("ram");
// var harry = new person("harry");

// var people = [james, ram, harry];
// people.forEach(function(person){
//     person.on("speak", function(msg){
//         console.log(person.name + " said "+ msg);
//     })
// })

// james.emit("speak", 'hello man');
// ram.emit("speak", "supp bruh");
//<------------------------------------------------------------------>


//reading and writing


var fs = require("fs");



// // synchronous

// var read = fs.readFileSync("file.txt", 'utf8')
// fs.writeFileSync("botCreated.txt", read);
// console.log(read)

// Asynchronous

// fs.readFile("file.txt", "utf8", function(err, data){
//     // fs.writeFile("botCreated.txt", data);
//     console.log(data)
// })

// fs.unlink("file.txt")


// ----------------------------------------------------------------------------------------------


//  ------------creating and removing directories----------------------------------------


// fs.mkdir("stuff", function(){
//     fs.readFile("file.txt", "utf8", function(err, data) {
//         // fs.writeFile("writeMe.txt", data)
//         console.log(data)
//         })
// })

// // fs.rmdir("stuff")


// -----------------------------------------------------------------
// ===================================================================================================


//  //create server

// var http = require('http');

// var server = http.createServer(function(req, res){
//     res.writeHead(200, {'content-type' : 'text/plain'});
//     res.end("byee")
// })

// server.listen(3000, '127.0.0.1');
// console.log("listening 101");

//  // readable streams

var http = require("http");
var fs = require("fs");

var readstream = fs.createReadStream("file.txt", 'utf8');
var writeStream = fs.createWriteStream("writeMe.txt");

readstream.on('data', function(chunk) {
    console.log('new chunk created :');
    writeStream.write(chunk);
    console.log(chunk);
})

