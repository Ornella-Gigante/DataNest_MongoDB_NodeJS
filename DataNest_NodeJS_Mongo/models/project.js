'use strict'

// Creacion del modelo con el que se va a trabajar en mongodb 

var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String, 
    year: Number, 
    langs: [String]


})

module.exports = mongoose.model('Project', ProjectSchema);

// projects  -- > guarda los doc en esa coleccion, y si no existe, la crea 