const express = require('express');
const app = express();
const port = process.env.PORT || 2315; 

// Middleware para manejar JSON
app.use(express.json());

// Definición de rutas
app.get('/', (req, res) => {
    res.send("¿A que dia de la semana se quiere desplazar? Indiquelo en la direccion con (/lunes, /martes, /miercoles, /jueves, /viernes)");
});

app.get('/lunes', (req, res) => {
    res.send("DESARROLLAR LA SOLUCION DE SOFTWARE DE ACUERDO CON EL DISEÑO Y METODOLOGIAS DE DESARROLLO");
});

app.get('/martes', (req, res) => {
    res.send("MATEMÁTICAS");
});

app.get('/miercoles', (req, res) => {
    res.send("ADMINISTRAR BASES DE DATOS DE ACUERDO CON LOS ESTANDARES Y REQUISITOS TECNICOS");
});

app.get('/jueves', (req, res) => {
    res.send("INGLÉS");
});

app.get('/viernes', (req, res) => {
    res.send("COMUNICACIONES");
});


// Iniciar el servidor 
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});