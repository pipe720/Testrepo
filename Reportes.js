import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Reportes() {
  const [box, setBox] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const generarReporte = (e) => {
    e.preventDefault();

    if (!box || !fechaInicio || !fechaFin) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    alert(`✅ Reporte generado:
Box: ${box}
Desde: ${fechaInicio}
Hasta: ${fechaFin}`);
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
              <li className="nav-item"><Link className="nav-link" to="/box" target="_blank">Gestión de box</Link></li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Horas</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/agendar" target="_blank">Agendar horas</Link></li>
                  <li><Link className="dropdown-item" to="/mod_agenda" target="_blank">Modificar horas</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/paciente" target="_blank">Gestión de pacientes</Link></li>
              <li className="nav-item"><Link className="nav-link" to="#">Reportes</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/insumos" target="_blank">Insumos</Link></li>
            </ul>
            <ul className="navbar-nav me2 mb-2 mb-lg-0">
              <li className="nav-item"><Link className="navbar-brand" to="/auth">Cerrar sesión</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="bg-danger text-white text-center py-3">
        <h1>Reportes</h1>
      </header>

      <main className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg">
              <div className="card-body bg-danger">
                <h2 className="text-center text-white mb-4">Generador de Reportes</h2>
                <form onSubmit={generarReporte}>
                  <div className="mb-3">
                    <label htmlFor="box" className="form-label text-white">Seleccionar Box</label>
                    <select
                      className="form-select"
                      id="box"
                      value={box}
                      onChange={(e) => setBox(e.target.value)}
                      required
                    >
                      <option value="">Seleccione un box</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={`Box ${i + 1}`}>Box {i + 1}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fechaInicio" className="form-label text-white">Fecha de Inicio</label>
                    <input
                      type="date"
                      className="form-control"
                      id="fechaInicio"
                      value={fechaInicio}
                      onChange={(e) => setFechaInicio(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fechaFin" className="form-label text-white">Fecha de Fin</label>
                    <input
                      type="date"
                      className="form-control"
                      id="fechaFin"
                      value={fechaFin}
                      onChange={(e) => setFechaFin(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">Generar Reporte</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Reportes;