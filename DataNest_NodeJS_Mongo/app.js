'use strict'

/* Este archivo configura una aplicación básica utilizando Express, un framework de Node.js para crear servidores web y manejar rutas. 
Incluye la integración de body-parser, un middleware que permite procesar datos enviados en solicitudes HTTP en formatos JSON o URL-encoded. 
Se define una ruta de prueba en el endpoint '/test' que responde con un mensaje JSON, y se deja preparado el espacio para agregar configuraciones adicionales como CORS y rutas externas. 
Finalmente, se exporta la instancia de la aplicación para ser utilizada en otros archivos del proyecto. */

var express = require('express'); 

var bodyParser = require('body-parser');

var app = express(); 

// Cargando archivos de las rutas 

// ====================== Middlewares ======================
// Los middlewares son funciones que se ejecutan antes de las rutas para procesar las solicitudes.

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//CORS 


//rutas! 



app.get('/', (req, res) => {
    // Enviamos directamente una cadena HTML como respuesta
    res.status(200).send('<h1>Home Page</h1>');
});



app.get('/test', (req,res)  => {
    res.status(200).send({

        message: "Hello world! This is muy first NodeJS API :) "

    });

});


app.post('/test/:id', (req,res)  => {



    // Que se vean datos especificos en consola de POST usando params desde website
    // POST = http://localhost:3700/test/01?web=https://www.linkedin.com/in/ornella-gigante
     console.log(req.params.id);

    // Que se vean datos especificos en consola de POST desde Postman (body) 
    // http://localhost:3700/test
    console.log(req.body.name);

    // Que se vean datos especificos en consola de POST usando query desde website
    // http://localhost:3700/test/web=https://www.linkedin.com/in/ornella-gigante
    console.log(req.query.web);


    res.status(200).send({

        message: "Using POST in Postman :)"

    });

});



// exportar 

module.exports = app; 

