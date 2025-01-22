'use strict'

// Conexión a la bbdd mongodb 
// Comando : npm start 

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio')
    .then( ()=> {
        console.log("Connection to database stablished");

    })
    .catch(
        err => console.log(err)
    );