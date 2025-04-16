const pool = require('../db/db');

const buscarUsuario = async(req, res) => {
    const { usuario, clave } = req.body;

    if (!usuario || clave) {
        return res.status(400).json({ mensaje: 'Usuario y clave son obligatorios' });
    }

    try {
        const resultado = await pool.query(
            'SELECT id FROM usuarios WHERE usuario = $1 AND $2', [usuario, clave]
        );

        if (resultado.rows.length > 0) {
            return res.json({ mensaje: 'Usuario encontrado', id: resultado.rows[0].id });
        } else {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar usuario', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};
module.exports = { buscarUsuario };