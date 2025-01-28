'use strict'

const project = require('../models/project');
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
    },


    // CReacion metodo que reciba request y una respuesta 

    // Devolvera el objeto que se solicite 


    getProject: function(req, res) {
        var projectId = req.params.id;

        if(projectId == null) return res.status(404).send({message:'El proyecto no existe'});
    
        Project.findById(projectId)
            .then(project => {
                if (!project) {
                    return res.status(404).send({ message: 'Not found' });
                }
                return res.status(200).send({ project });
            })
            .catch(err => {
                return res.status(500).send({ message: 'Error retrieving the data', error: err.message });
            });
    },

    // Metodo que devolvera un listado de elementos de la bbdd 

    getProjects: function(req, res) {
        Project.find({})
            .sort({year:1}) //ordena de menor a mayor por parametro year (si fuera de mayor a menor sería -1)
            .then(projects => {
                if (!projects || projects.length === 0) {
                    return res.status(404).send({ message: 'Not found' });
                }
                return res.status(200).send({ projects });
            })
            .catch(err => {
                return res.status(500).send({ message: 'Error retrieving the projects', error: err.message });
            });
    },


    //Creacion de metodo para acutalizar datos 
    // new:true sera el elemento actualizado 

    updateProject: function(req, res) {
        var projectId = req.params.id;
        var update = req.body;
    
        Project.findByIdAndUpdate(projectId, update, { new: true }) 
            .then(project => {
                if (!project) {
                    return res.status(404).send({ message: 'Not found' });
                }
                return res.status(200).send({ project });
            })
            .catch(err => {
                return res.status(500).send({ message: 'Error', error: err.message });
            });
    },
    
    
    // Creacion de metodo para borrar datos 

    deleteProject: function(req, res) {
        var projectId = req.params.id;
    
        Project.findByIdAndDelete(projectId)
            .then(projectDeleted => {
                if (!projectDeleted) {
                    return res.status(404).send({ message: 'Project not found' });
                }
                return res.status(200).send({ 
                    message: 'Project successfully deleted',
                    project: projectDeleted 
                });
            })
            .catch(err => {
                return res.status(500).send({ message: 'Error deleting the project', error: err.message });
            });
    },


    // Creacion de metodo para subir imagen 

    uploadImage: function(req, res){

        var projectId = req.params.id; 
        var fileName = 'Imagen no subida';

        if(req.files){

            return res.status(200).send({
                files: req.files
            });
        }else{
            return res.status(200).send({
                message: fileName

            });
            
        };
    }
    
};

// Exporta el objeto controller para que pueda ser utilizado en otros archivos del proyecto
module.exports = controller;



