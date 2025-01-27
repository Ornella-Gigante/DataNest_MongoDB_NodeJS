'use strict'

// Declara un objeto llamado controller, 
// que contendrá las funciones que actuarán como controladores para manejar diferentes rutas o solicitudes en la aplicación.

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

    }
}; 

// Exporta el objeto controller para que pueda ser utilizado en otros archivos del proyecto

module.exports = controller; 