const express = require('express');
const router = express.Router();
const { buscarUsuario } = require('../controllers/usuariosController') // esto importa el controlador

// ruta que usa el controlador
router.post('/buscarusuario', buscarUsuario);

module.exports = router;