'use strict'

var express = require('express'); 

var bodyParser = require('body-parser');

var app = express(); 

// Cargando archivos de las rutas 

// middlewares 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//CORS 


//rutas! 

app.get('test', (req,res)  => {
    res.status(200).send({

        message: "Hello world! This is muy first NodeJS API :) "

    });

});


// exportar 

module.exports = app; 

