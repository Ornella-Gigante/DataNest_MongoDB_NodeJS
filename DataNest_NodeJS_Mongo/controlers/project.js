'use strict'

// Importación del modelo 
var Project = require('../models/project'); 

// Declara un objeto llamado controller, que contendrá las funciones que actuarán como controladores.
var controller = {

    home: function(req, res){
        return res.status(200).send({
            message: 'Home Page'
        });
    },

    test: function(req, res){
        return res.status(200).send({
            message: 'Im the test of the controller of the project'
        });
    }, 

    saveProject: function(req,res){
        // Creación de nuevo proyecto con sus params (atributos)
        var project = new Project();
        var params = req.body;

        project.name = params.name; 
        project.description = params.description; 
        project.category = params.category;
        project.year = params.year; 
        project.langs = params.langs; 
        project.image = null; 

        // Guardar proyecto creado en la base de datos
        project.save((err, projectStored) => {
            if(err) return res.status(500).send({ message:'Error in the petition of saving' });

            if(!projectStored) return res.status(400).send({ message: 'Not found' });

            // Si todo está bien, devolver el proyecto guardado
            return res.status(200).send({
                project: projectStored,
                message: "Project saved successfully"
            });
        });
    }
}; 

// Exporta el objeto controller para que pueda ser utilizado en otros archivos del proyecto
module.exports = controller;
