// App.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEdit, setUsuarioEdit] = useState(null);

  const abrirModal = (index) => {
    setUsuarioEdit(index >= 0 ? usuarios[index] : null);
    const modal = new window.bootstrap.Modal(
      document.getElementById("modalUsuario")
    );
    modal.show();
  };

  const guardarUsuario = (e) => {
    e.preventDefault();
    const nuevoUsuario = {
      rol: e.target.rol.value,
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      correo: e.target.correo.value,
      rut: e.target.rut.value,
    };

    if (usuarioEdit !== null) {
      const copia = [...usuarios];
      copia[usuarioEdit] = nuevoUsuario;
      setUsuarios(copia);
    } else {
      setUsuarios([...usuarios, nuevoUsuario]);
    }

    const modal = window.bootstrap.Modal.getInstance(
      document.getElementById("modalUsuario")
    );
    modal.hide();
  };

  const eliminarUsuario = () => {
    if (usuarioEdit !== null) {
      const copia = usuarios.filter((_, i) => i !== usuarioEdit);
      setUsuarios(copia);
      setUsuarioEdit(null);
    }
  };

  return (
    <div className="bg-light">
      {/* 🔹 Menú de navegación */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Admin">Home</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Crear_usuarios">Crear usuarios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Ver_usuarios" target="_blank">Ver usuarios</Link>
              </li>
            </ul>
            <ul className="navbar-nav me2 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="navbar-brand" to="/auth">Cerrar sesión</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="bg-danger text-white text-center py-3">
        <h1>Creación de usuarios</h1>
      </header>

      {/* 🔹 Contenido principal */}
      <main className="container my-5">
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-success" onClick={() => abrirModal(-1)}>
            Crear usuario
          </button>
          <button
            className="btn btn-warning"
            onClick={() => usuarioEdit !== null && abrirModal(usuarioEdit)}
          >
            Modificar usuario
          </button>
          <button className="btn btn-danger" onClick={eliminarUsuario}>
            Eliminar usuario
          </button>
        </div>

        {/* Tabla de usuarios */}
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Rol</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>RUT</th>
              <th>Seleccionar</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{u.rol}</td>
                <td>{u.nombre}</td>
                <td>{u.apellido}</td>
                <td>{u.correo}</td>
                <td>{u.rut}</td>
                <td>
                  <input
                    type="radio"
                    name="selectUsuario"
                    onChange={() => setUsuarioEdit(i)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Modal */}
      <div className="modal fade" id="modalUsuario" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <form id="formUsuario" onSubmit={guardarUsuario}>
              <div className="modal-header">
                <h5 className="modal-title">Gestión de Usuario</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="rol" className="form-label">Rol</label>
                  <select id="rol" name="rol" className="form-select" required defaultValue={usuarioEdit?.rol || ""}>
                    <option value="">Seleccione...</option>
                    <option>Enfermero</option>
                    <option>Enfermera</option>
                    <option>Doctor</option>
                    <option>Doctora</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" id="nombre" name="nombre" className="form-control" required defaultValue={usuarioEdit?.nombre || ""}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">Apellido</label>
                  <input type="text" id="apellido" name="apellido" className="form-control" required defaultValue={usuarioEdit?.apellido || ""}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Correo</label>
                  <input type="email" id="correo" name="correo" className="form-control" required defaultValue={usuarioEdit?.correo || ""}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="rut" className="form-label">RUT</label>
                  <input type="text" id="rut" name="rut" className="form-control" placeholder="Ej: 12.345.678-9" required defaultValue={usuarioEdit?.rut || ""}/>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" className="btn btn-primary">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;