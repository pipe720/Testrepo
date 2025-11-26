import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./paciente.css"

function Paciente() {
  const [run, setRun] = useState('');
  const [nombre, setNombre] = useState('');
  const [etapa, setEtapa] = useState('');
  const [tratamiento, setTratamiento] = useState('');

  const registrarPaciente = (e) => {
    e.preventDefault();

    if (!run || !nombre || !etapa || !tratamiento) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    alert(`✅ Paciente registrado:
RUN: ${run}
Nombre: ${nombre}
Etapa: ${etapa}
Tratamiento: ${tratamiento}`);
  };

  return (
    <div className="bg-light">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/box" target='_blank'>Gestión de box</Link></li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Horas</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/agendar" target='_blank'>Agendar horas</Link></li>
                  <li><Link className="dropdown-item" to="/mod_agenda" target='_blank'>Modificar horas</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link" to="#">Gestión de pacientes</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/reportes" target='_blank'>Reportes</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/insumos" target='_blank'>Insumos</Link></li>
            </ul>
            <ul className="navbar-nav me2 mb-2 mb-lg-0">
              <li className="nav-item"><Link className="navbar-brand" to="/auth">Cerrar sesión</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="bg-danger text-white text-center py-3">
        <h1>Ficha de Paciente</h1>
      </header>

      <main className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg">
              <div className="card-body bg-danger">
                <h2 className="text-center text-white mb-4">Registrar Paciente</h2>
                <form onSubmit={registrarPaciente}>
                  <div className="mb-3">
                    <label htmlFor="run" className="form-label text-white">RUN</label>
                    <input
                      type="text"
                      className="form-control"
                      id="run"
                      placeholder="Ej: 12345678-9"
                      value={run}
                      onChange={(e) => setRun(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label text-white">Nombre Completo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      placeholder="Nombre y Apellido"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etapa" className="form-label text-white">Etapa</label>
                    <select
                      id="etapa"
                      className="form-select"
                      value={etapa}
                      onChange={(e) => setEtapa(e.target.value)}
                      required
                    >
                      <option value="">Seleccione...</option>
                      <option>Primera</option>
                      <option>Segunda</option>
                      <option>Tercera</option>
                      <option>Cuarta</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tratamiento" className="form-label text-white">Tipo de Tratamiento</label>
                    <select
                      id="tratamiento"
                      className="form-select"
                      value={tratamiento}
                      onChange={(e) => setTratamiento(e.target.value)}
                      required
                    >
                      <option value="">Seleccione...</option>
                      <option>Kinesiológico</option>
                      <option>Fonoaudiológico</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-success w-100">Guardar Paciente</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Paciente;