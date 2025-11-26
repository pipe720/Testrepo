import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Insumos() {
  const [especialidad, setEspecialidad] = useState('');
  const [insumoAdicional, setInsumoAdicional] = useState('');

  const calculoInsumos = (e) => {
    e.preventDefault();

    const insumoB = parseFloat(insumoAdicional);

    if (!especialidad || !insumoAdicional) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    if (isNaN(insumoB) || insumoB < 0) {
      alert("Por favor, ingrese un valor válido para el insumo adicional.");
      return;
    }

    let base = especialidad === "esp1" ? 5000 : 7000;
    let nombre = especialidad === "esp1" ? "Fonoaudiología" : "Kinesiología";
    let total = base + insumoB;

    alert(`✅ Insumos para ${nombre}:
    Insumo base: $${base}
    Insumo adicional: $${insumoB}
    Total: $${total}`);
    alert("El reporte ha sido generado exitosamente.");

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
              <li className="nav-item"><Link className="nav-link" to="/box" target='_blank'>Gestión de box</Link></li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Horas</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/agendar" target='_blank'>Agendar horas</Link></li>
                  <li><Link className="dropdown-item" to="/mod_agenda" target='_blank'>Modificar horas</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/paciente" target='_blank'>Gestión de pacientes</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/reportes" target='_blank'>Reportes</Link></li>
              <li className="nav-item"><Link className="nav-link" to="#">Insumos</Link></li>
            </ul>
            <ul className="navbar-nav me2 mb-2 mb-lg-0">
              <li className="nav-item"><Link className="navbar-brand" to="/auth">Cerrar sesión</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="bg-danger text-white text-center py-3">
        <h1>Insumos</h1>
      </header>

      <main className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg">
              <div className="card-body bg-danger">
                <h2 className="text-center text-white mb-4">Ingreso de Insumos</h2>
                <form onSubmit={calculoInsumos}>
                  <div className="mb-3">
                    <label htmlFor="insumoa" className="form-label text-white">Seleccionar Especialización</label>
                    <select
                      className="form-select"
                      id="insumoa"
                      value={especialidad}
                      onChange={(e) => setEspecialidad(e.target.value)}
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="esp1">Fonoaudiología</option>
                      <option value="esp2">Kinesiología</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="insumob" className="form-label text-white">Insumo adicional</label>
                    <input
                      type="text"
                      className="form-control"
                      id="insumob"
                      placeholder="Ingrese el costo del insumo no previsto"
                      value={insumoAdicional}
                      onChange={(e) => setInsumoAdicional(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">Confirmar insumos</button>
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

export default Insumos;