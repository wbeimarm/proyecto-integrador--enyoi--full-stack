import { useState } from 'react';
import './Login.css';

function Login() {
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [resultado, setResultado] = useState('');

    const manejarSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3000/api/buscarusuario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ usuario, clave }),
            });

            const data = await res.json();

            if (res.ok) {
                setResultado(`✅ ${data.mensaje} (ID: ${data.id})`);
            } else {
                setResultado(`❌ ${data.mensaje}`);
            }
        } catch (error) {
            console.error('Error al conectar con el servidor:', error);
            setResultado('❌ Error al conectar con el servidor');
        }
    };

    return (
        <div className="contenedor">
            <h1 className="titulo">Proyecto Enyoi Full Stack</h1>
            <h2>Buscar Usuario</h2>
            <form onSubmit={manejarSubmit} className="formulario">
                <label htmlFor="usuario">Usuario:</label>
                <input
                    id="usuario"
                    type="text"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                    placeholder="Usuario"
                />

                <label htmlFor="clave">Clave:</label>
                <input
                    id="clave"
                    type="password"
                    value={clave}
                    onChange={(e) => setClave(e.target.value)}
                    required
                    placeholder="Clave"
                />

                <button type="submit">Buscar</button>
            </form>

            {resultado && <div id="resultado">{resultado}</div>}
        </div>
    );
}

export default Login;
