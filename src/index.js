'use strict'; // Activa el modo estricto para mejorar la calidad del código y evitar errores comunes.

// Importamos la librería mongoose, que nos permite interactuar con MongoDB desde Node.js.
var mongoose = require('mongoose');

// Importamos el archivo 'app', que probablemente contiene la configuración de Express para nuestra aplicación.
var app = require('./app');

// Definimos el puerto en el que se ejecutará el servidor.
var port = 3700;

// Configuramos mongoose para usar las Promesas nativas de JavaScript (Promise).
// Esto asegura un manejo más moderno y consistente de las operaciones asíncronas.
mongoose.Promise = global.Promise;

// Conectamos a la base de datos MongoDB.
// 'mongodb://localhost:27017/portafolio' es la URL de conexión, donde:
// - `localhost` indica que la base de datos está en el equipo local.
// - `27017` es el puerto por defecto de MongoDB.
// - `portafolio` es el nombre de la base de datos a la que queremos conectarnos.
mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(() => {
        // Si la conexión es exitosa, se ejecuta este bloque.
        console.log("Connection to database stablished"); // Mensaje indicando que la conexión fue exitosa.

        // Una vez conectados a la base de datos, iniciamos el servidor.
        app.listen(port, () => {
            // Escuchamos en el puerto definido (3700) y mostramos un mensaje indicando que el servidor está funcionando.
            console.log("Server working correctly!");
        });
    })
    .catch(err => {
        // Si ocurre un error durante la conexión a MongoDB, lo capturamos aquí y lo mostramos en consola.
        console.log(err);
    });
