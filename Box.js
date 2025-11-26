import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./box.css"

function BoxManager() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [numeroBox, setNumeroBox] = useState('');
  const [tipoBox, setTipoBox] = useState('');
  const [tamanoBox, setTamanoBox] = useState('');
  const [boxes, setBoxes] = useState([]);

  const registrarBox = (e) => {
    e.preventDefault();

    if (!numeroBox.trim() || !tipoBox || !tamanoBox) {
      alert("Debe completar todos los campos.");
      return;
    }

    const nuevoBox = {
      numero: numeroBox.trim(),
      tipo: tipoBox,
      tamano: tamanoBox,
      estado: "Disponible"
    };

    setBoxes([...boxes, nuevoBox]);
    alert("✅ Box registrado con éxito.");

    // Resetear formulario
    setNumeroBox('');
    setTipoBox('');
    setTamanoBox('');
    setMostrarFormulario(false);
  };

  return (

    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="#">Gestión de box</Link></li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Horas</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/agendar" target='_blank'>Agendar horas</Link></li>
                  <li><Link className="dropdown-item" to="/mod_agenda" target='_blank'>Modificar horas</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/paciente" target='_blank'>Gestión de pacientes</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/reportes" target='_blank'>Reportes</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/insumos" target='_blank'>Insumos</Link></li>
            </ul>
            <ul className="navbar-nav me2 mb-2 mb-lg-0">
              <li className="nav-item"><Link className="navbar-brand" to="/auth">Cerrar sesión</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div />
      <header className="bg-danger text-white text-center py-3">
        <h1>Gestiones de box</h1>
      </header>
      <div />

      <div className="container my-4">
        <h2>Gestión de Box</h2>

        <button className="btn btn-primary mb-3" onClick={() => setMostrarFormulario(true)}>
          Nuevo Box
        </button>

        {mostrarFormulario && (
          <div id="formBox" className="card p-3 mb-4">
            <form onSubmit={registrarBox}>
              <div className="mb-3">
                <label htmlFor="numeroBox" className="form-label">Número</label>
                <input
                  type="text"
                  id="numeroBox"
                  className="form-control"
                  value={numeroBox}
                  onChange={(e) => setNumeroBox(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tipoBox" className="form-label">Tipo</label>
                <select
                  id="tipoBox"
                  className="form-select"
                  value={tipoBox}
                  onChange={(e) => setTipoBox(e.target.value)}
                  required
                >
                  <option value="">Seleccione...</option>
                  <option value="Kinesiología">Kinesiología</option>
                  <option value="Fonoaudiología">Fonoaudiología</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="tamanoBox" className="form-label">Tamaño</label>
                <select
                  id="tamanoBox"
                  className="form-select"
                  value={tamanoBox}
                  onChange={(e) => setTamanoBox(e.target.value)}
                  required
                >
                  <option value="">Seleccione...</option>
                  <option value="Pequeño">Pequeño</option>
                  <option value="Mediano">Mediano</option>
                  <option value="Grande">Grande</option>
                </select>
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success">Registrar</button>
                <button type="button" className="btn btn-secondary" onClick={() => setMostrarFormulario(false)}>Cancelar</button>
              </div>
            </form>
          </div>
        )}

        <table className="table table-bordered" id="tablaBox">
          <thead>
            <tr>
              <th>Número</th>
              <th>Tipo</th>
              <th>Tamaño</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {boxes.map((box, index) => (
              <tr key={index}>
                <td>{box.numero}</td>
                <td>{box.tipo}</td>
                <td>{box.tamano}</td>
                <td><span className="badge bg-success">{box.estado}</span></td>
                <td>
                  <button className="btn btn-sm btn-outline-danger me-2">Editar</button>
                  <button className="btn btn-sm btn-outline-secondary">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BoxManager;