'use strict'


var express = require('express');
var ProjectController = require('../controlers/project');
var router = express.Router();

// Define una ruta HTTP GET en la URL /home. 
// Cuando un cliente accede a esta ruta, se ejecuta la función home del ProjectController.

router.get('/home', ProjectController.home);

// router.post('/test', ProjectController.test): Define una ruta HTTP POST en la URL /test. 
// Cuando un cliente envía datos a esta ruta, se ejecuta la función test del ProjectController.
router.post('/test', ProjectController.test);

// Ruta para giardar proyecto creado
router.post('/save-project', ProjectController.saveProject); 
// Ruta para ver el proyecto seleccionado con id opcional (?)
// El id debe ser tal cual en mongodb
router.get('/project/:id?', ProjectController.getProject)
// Ruta de la lista 
router.get('/projects', ProjectController.getProjects);
//Ruta de la actualizacion 
router.put('/project/:id', ProjectController.updateProject);
// Ruta de borrado 
router.delete('/project/:id',ProjectController.deleteProject);
// Ruta para las imagenes 
router.post('/upload-image/:id', ProjectController.uploadImage);

module.exports = router; 