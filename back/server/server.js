require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Conectar a la base de datos
async function conectarDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Login');
        console.log('Conectado a MongoDB');
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
    }
}

conectarDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Tu código del servidor aquí
const puerto = 3001;

app.listen(puerto, () => {
    console.log(`Escuchando en puerto ${puerto}`);
});