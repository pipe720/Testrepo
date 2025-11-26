import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import "./auth.css"
import logo from "./Documentos/foto1.jpg"

function Auth() {
  const usuarioRef = useRef();
  const passwordRef = useRef();

  function autenticarUsuarios() {
    const Usuario = usuarioRef.current.value;
    const Password = passwordRef.current.value;

    if (!estrucuturaSoloTexto(Usuario)) {
      alert("Tiene que escribir su usuario.");
      return;
    }
    if (!estrucuturaSoloTexto(Password)) {
      alert("Tiene que escribir su contraseña.");
      return;
    }

    alert("Datos ingresados correctamente.");
    window.location.href = "/"; // usa rutas de React Router si es SPA
  }

  function estrucuturaSoloTexto(texto) {
    const re = /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ\s]+$/;
    return re.test(String(texto).toLowerCase());
  }

  return (
    <div className="bg-light">
      <header className="bg-danger text-white text-center py-3">
        <div><img src={logo} alt="logo" className="img-reducida"/></div>
      </header>

      <main className="container my-5">
        <div className="row justify-content-center ">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body bg-danger">
                <Link to="/Admin">
                <button type="button" className="btn-btn">Ingresar a admin</button>
                </Link>
                <h2 className="card-tittle text-white">Iniciar Sesión</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="usuario" ref={usuarioRef} placeholder="Ingrese su usuario" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" ref={passwordRef} placeholder="Ingrese su contraseña" required />
                  </div>
                  <button type="button" onClick={autenticarUsuarios} className="btn btn-primary">Ingresar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Auth;