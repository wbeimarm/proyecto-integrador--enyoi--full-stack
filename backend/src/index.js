require('dotenv').config();
const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuariosRoutes');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['POST', 'GET'],
    credentials: true,
}));

app.use(express.json());
app.use(express.static('public')); // permite servir archivos estáticos

// Rutas API
app.use('/api', usuarioRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});