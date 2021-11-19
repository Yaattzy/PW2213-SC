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
    if(connection){
        const persona = req.body;
 
        if(!persona.nombre){
            return res.status(400).json({error: true, mensaje: "El nombre es obligatorio"});
        }

        if(persona.telefono && persona.telefono.length !== 10){
            return res.status(400).json({error: true, mensaje: "El teléfono debe de ser de 10 digitos."});
        }

        let sql = "INSERT INTO personas set ?";
        connection.query(sql, [persona], (err, rows) => {
            if(err){
                res.status(400).json(err);
            } else {
                res.json({error: false, data: rows, mensaje: "Persona agregada con exito."});
            }
        });
    }
}

function editar(req, res){
    if(connection) {
        const {id} = req.params;
        const persona = req.body;

        if(!persona.nombre){
            return res.status(400).json({error: true, mensaje: "El nombre es obligatorio"});
        }

        if(persona.telefono && persona.telefono.length !== 10){
            return res.status(400).json({error: true, mensaje: "El teléfono debe de ser de 10 digitos."});
        }

        let sql = "UPDATE personas set ? WHERE id = ?";
        connection.query(sql, [persona, id], (err, rows) => {
            if(err) {
                res.status(400).json(err);
            } else {
                let mensaje = "";
                if(rows.changedRows === 0) mensaje = "La información es la misma.";
                else mensaje = "Persona actualizada con exito.";
                res.json({error: false, data: rows, mensaje});
            }
        });
    }
}

function eliminar(req, res) {
    if(connection){
        const {id} = req.params;
        let sql = "DELETE FROM personas where id = ?";
        connection.query(sql, [id], (err, rows) => {
            if(err) {
                res.status(400).json(err);
            } else {
                let mensaje = "";
                if(rows.affectedRows === 0) mensaje = "Persona no encontrada";
                else mensaje = "Persona eliminada con exito."
                res.json({error: false, data: rows, mensaje});
            }
        });
    }
}

module.exports = {
    listar,
    obtenerPersona,
    crear,
    editar,
    eliminar
}