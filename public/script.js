document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const clave = document.getElementById('clave').value;

    try {
        const respuesta = await fetch('/api/buscarusuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usuario, clave })
        });

        const data = await respuesta.json();
        const resultadoDiv = document.getElementById('resultado');

        if (respuesta.ok) {
            resultadoDiv.textContent = `✅ ${data.mensaje}. ID: ${data.id}`;
        } else {
            resultadoDiv.textContent = `❌ ${data.mensaje}`;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('resultado').textContent = 'Error de conexión con el servidor';
    }
});