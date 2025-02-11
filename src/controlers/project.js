'use strict'


const project = require('../models/project');
// Importación del modelo 
var Project = require('../models/project'); 

// importacion libreria Node.js 

var fs = require('fs');

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

    uploadImage: function(req, res) {
        var projectId = req.params.id; 
        var fileName = 'Imagen no subida';
    
        if (req.files) {
            // Obtener la ruta completa del archivo subido
            var filePath = req.files.image.path;
            // Extraer el nombre del archivo manualmente, sin usar 'path'
            var fileSplit = filePath.split('/');
            if (fileSplit.length === 1) {
                // Si el separador es diferente (por ejemplo, en Windows)
                fileSplit = filePath.split('\\');
            }
            var fileName = fileSplit[1]; 
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            //

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt=='gif'){

                  // Crear objeto de actualización para guardar el nombre del archivo en la base de datos
            var update = { image: fileName };
    
            // Actualizar el proyecto con el nombre de la imagen
            Project.findByIdAndUpdate(projectId, update, { new: true })
                .then(project => {
                    if (!project) {
                        return res.status(404).send({ message: 'Proyecto no encontrado' });
                    }
                    return res.status(200).send({ 
                        message: 'Imagen subida correctamente',
                        project 
                    });
                })
                .catch(err => {
                    return res.status(500).send({ 
                        message: 'Error al actualizar el proyecto',
                        error: err.message 
                    });
                });


            } else{

                fs.unlink(filePath, (err) => {
                    return res.status(200).send({
                        message: 'Extension not valid'

                    });

                })
            }
    
        } else {
            // Si no se subió ningún archivo
            return res.status(400).send({
                message: 'No se ha subido ningún archivo'
            });
        }
    }
    


    
};

// Exporta el objeto controller para que pueda ser utilizado en otros archivos del proyecto
module.exports = controller;



