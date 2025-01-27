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


router.post('/save-project', ProjectController.saveProject); 

module.exports = router; 