var events = require("events");

var myemitter =  new events.EventEmitter();

myemitter.on('somevent' , function(mssg){
    console.log(mssg);
})


myemitter.emit('somevent', 'helllo');