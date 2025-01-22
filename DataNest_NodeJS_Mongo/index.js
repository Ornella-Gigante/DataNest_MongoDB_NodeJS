'use strict'

// Conexión a la bbdd mongodb 
// Comando : npm start 

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700; 


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio')
    .then( ()=> {
        console.log("Connection to database stablished");

        // Creación del servidor 
        app.listen(port, () => {
            console.log("Server working correctly!");
        });

    })
    .catch(
        err => console.log(err)
    );