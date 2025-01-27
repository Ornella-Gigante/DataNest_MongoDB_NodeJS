'use strict'

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


module.exports = controller; 