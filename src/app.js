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


// Cargar archivo de ruta 

var project_rutes = require('./rutas/project');



// Ruta 


app.use('/api', project_rutes);

// exportar 

module.exports = app; 

