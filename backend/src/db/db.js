require('dotenv').config({ path: '../.env' }); // Asegúrate que el archivo sea ".env" con punto

console.log('usuario:', process.env.DB_USER);
console.log('clave:', process.env.DB_PASSWORD);

const { Client } = require('pg'); // Correcto

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

client.connect()
    .then(() => console.log('🟢 Conexión exitosa a la base de datos'))
    .catch((err) => console.log('🔴 Error de conexión a la base de datos', err));

module.exports = client;