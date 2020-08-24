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

fs.readFile("file.txt", "utf8", function(err, data){
    // fs.writeFile("botCreated.txt", data);
    console.log(data)
})
