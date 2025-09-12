const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('./database.db');

app.use(bodyParser.json());

// Crear la tabla si no existe
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS sentences (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sentence TEXT NOT NULL
    )`);
});

// Endpoint para guardar la oración
app.post('/api/save', (req, res) => {
    const { sentence } = req.body;
    db.run(`INSERT INTO sentences (sentence) VALUES (?)`, [sentence], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, sentence });
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
