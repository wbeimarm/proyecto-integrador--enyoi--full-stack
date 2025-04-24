require('dotenv').config();
const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuariosRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // 🔥 Esta línea permite servir archivos estáticos desde la carpeta public

// Rutas API
app.use('/api', usuarioRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});