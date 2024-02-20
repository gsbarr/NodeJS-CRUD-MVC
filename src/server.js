const express = require('express');

// Inicializaciones
const app = express();

// Configuración
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '../views');

// Middleware
app.use(express.urlencoded({extended: false})); // Convierte automaticamente cualquier dato que recibe en un JSON


//Variables globales

// Rutas
app.use(require('./routes/MotosRutas.js'));

// Archivos estáticos
app.use(express.static(__dirname +  '\public')); // Configuramos cuál es la carpeta PUBLIC


module.exports = app;