// Importando express

const express = require('express');

// Inicializar mi aplicación

const app = express();

// Configuraciones

app.set('port', process.env.PORT || 3000);

// rutas 

app.get('/hola', (req, res) => {
    console.log("Mi ruta get sin nada");
    //res.send("Mi texto plano.");
    res.json({mensaje: "Mi mensaje en json"});
});

app.get('/zapato/adios', (req, res) => {
    console.log("Mi ruta get sin nada");
    //res.send("Mi texto plano.");
    res.json({mensaje: "MI RUTA DOS"});
});

// Levantar el servidor
app.listen(app.get('port'), (error) => {
    if(error) {
        console.log("error: ", error);
    } else {
        console.log("Servidor en puerto: ", app.get('port'));
    }
});