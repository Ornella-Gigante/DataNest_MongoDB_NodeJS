'use strict'
/* Este archivo configura una aplicación básica utilizando Express, un framework de Node.js para crear servidores web y manejar rutas. 
Incluye la integración de body-parser, un middleware que permite procesar datos enviados en solicitudes HTTP en formatos JSON o URL-encoded. 
Se define una ruta de prueba en el endpoint '/test' que responde con un mensaje JSON, y se deja preparado el espacio para agregar configuraciones adicionales como CORS y rutas externas. 
Finalmente, se exporta la instancia de la aplicación para ser utilizada en otros archivos del proyecto. */

const cors = require('cors');
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')
const helpmet = require('helpmet')

// Cargando archivos de las rutas 

// ====================== Middlewares ======================
// Los middlewares son funciones que se ejecutan antes de las rutas para procesar las solicitudes.

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//CORS 
app.use(cors())
app.use(morgan('combined'));
app.use('helpmet')
app.use(
	rateLimit({
		max: ONE_HUNDRED,
		windowMs: SIXTY,
		message: 'Trop de Requete à partir de cette adresse IP '
	})
);
// Cargar archivo de ruta 

const project_rutes = require('./rutas/project');



// Ruta 

app.use('/api', project_rutes);

// exportar 

module.exports = app; 
