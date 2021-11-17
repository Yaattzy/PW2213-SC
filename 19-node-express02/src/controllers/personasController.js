const { response } = require('express');
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

module.exports = {
    listar
}