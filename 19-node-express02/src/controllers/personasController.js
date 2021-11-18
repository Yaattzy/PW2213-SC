const connection = require('../config/connection');

function listar(req, res) {
    if(connection) {
        let sql = "SELECT * FROM personas";
        
        connection.query(sql, (err, personas) => {
            if(err) {
                res.status(400).json(err);
            } else {
                res.json(personas);
            }
        });
    }
}

function obtenerPersona(req, res) {
    if(connection) {
        const id = req.params.id;
        
        let sql = `SELECT * FROM personas WHERE id = ${connection.escape(id)}`;

        connection.query(sql, (err, persona) => {
            if(err){
                res.status(400).json(err);
            } else {
                let mensaje = ""
                if(persona === undefined || persona.length === 0)
                    mensaje = "Persona no encontrada"
                res.json({data: persona[0], mensaje});
            }
        });
    }
}

function crear(req, res) {
    console.log(req.body);
}

module.exports = {
    listar,
    obtenerPersona,
    crear
}