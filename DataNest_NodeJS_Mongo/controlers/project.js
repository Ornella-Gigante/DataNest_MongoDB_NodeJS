'use strict'

// Importación del modelo 
var Project = require('../models/project'); 

// Declara un objeto llamado controller, que contendrá las funciones que actuarán como controladores.
var controller = {

    home: function(req, res) {
        return res.status(200).send({
            message: 'Home Page'
        });
    },

    test: function(req, res) {
        return res.status(200).send({
            message: 'Im the test of the controller of the project'
        });
    }, 

    saveProject: function(req, res) {
        // Crear un nuevo proyecto
        var project = new Project(req.body);
    
        // Guardar en la base de datos usando promesas
        project.save()
            .then(projectStored => {
                return res.status(200).send({
                    project: projectStored,
                    message: "Project saved successfully"
                });
            })
            .catch(err => {
                return res.status(500).send({ message: 'Error saving the project', error: err.message });
            });
    }
};

// Exporta el objeto controller para que pueda ser utilizado en otros archivos del proyecto
module.exports = controller;



