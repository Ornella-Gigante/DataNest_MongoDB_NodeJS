'use strict'

// Creacion del modelo con el que se va a trabajar en mongodb 

//Importacion d ela biblioteca mongoose para acceder a la bbdd mongodb
var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

// SE define la estrutura del proyecto que se usara en la bbdd 
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String, 
    year: Number, 
    langs: String,
    image: String


})

// SE exporta el modelo para comunicarse con la mongodb 

module.exports = mongoose.model('Project', ProjectSchema);

// projects  -- > guarda los doc en esa coleccion, y si no existe, la crea 