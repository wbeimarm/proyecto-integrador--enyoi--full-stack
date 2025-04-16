require(' dotenv').config();
const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuariosRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', usuarioRoutes);

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

const PORT = process.env.PORT || 3000; // usa el puerto de. .env si esta disponible
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});