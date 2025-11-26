import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./agendar.css"

function Agendar() {
  const [boxEstado, setBoxEstado] = useState([
    { id: 1, estado: "disponible" },
    { id: 2, estado: "ocupado" },
    { id: 3, estado: "disponible" },
    { id: 4, estado: "mantencion" },
    { id: 5, estado: "disponible" },
    { id: 6, estado: "ocupado" },
    { id: 7, estado: "disponible" },
    { id: 8, estado: "disponible" },
    { id: 9, estado: "mantencion" },
    { id: 10, estado: "ocupado" },
    { id: 11, estado: "disponible" },
    { id: 12, estado: "disponible" }
  ]);

  const [boxSeleccionado, setBoxSeleccionado] = useState("");

  const pacienteRef = useRef();
  const etapaRef = useRef();
  const fechaRef = useRef();
  const horaRef = useRef();
  const tipoRef = useRef();
  const profesionalRef = useRef();

  const seleccionarBox = (box) => {
    if (box.estado !== "disponible") {
      alert("Este box no está disponible.");
      return;
    }
    setBoxSeleccionado(box.id);
    alert("Has seleccionado el Box " + box.id);
  };

  const confirmarAgendamiento = (e) => {
    e.preventDefault();

    const paciente = pacienteRef.current.value;
    const etapa = etapaRef.current.value;
    const fecha = fechaRef.current.value;
    const hora = horaRef.current.value;
    const tipo = tipoRef.current.value;
    const profesional = profesionalRef.current.value;

    if (!boxSeleccionado) {
      alert("Debe seleccionar un Box disponible.");
      return;
    }

    alert(`✅ Sesión agendada:
Paciente: ${paciente}
Etapa: ${etapa}
Fecha: ${fecha} Hora: ${hora}
Tipo: ${tipo}
Profesional: ${profesional}
Box: ${boxSeleccionado}`);

    const actualizado = boxEstado.map((b) =>
      b.id === boxSeleccionado ? { ...b, estado: "ocupado" } : b
    );
    setBoxEstado(actualizado);
    setBoxSeleccionado("");
    e.target.reset();
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
                  <li><Link className="dropdown-item" to="#">Agendar horas</Link></li>
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

      <header className="bg-danger text-white text-center py-3">
        <h1>Agendamiento de horas</h1>
      </header>

      <main className="container my-5">
        <div className="row">
          <div className="col-md-7">
            <h3 className="text-primary mb-3">Mapa de Box</h3>
            <div className="d-flex flex-wrap gap-3">
              {boxEstado.map((box) => (
                <div
                  key={box.id}
                  className={`box ${box.estado}`}
                  onClick={() => seleccionarBox(box)}
                >
                  Box {box.id}
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-5">
            <h3 className="text-primary mb-3">Detalle del Agendamiento</h3>
            <form onSubmit={confirmarAgendamiento}>
              <div className="mb-3">
                <label htmlFor="paciente" className="form-label">Paciente</label>
                <input type="text" id="paciente" className="form-control" ref={pacienteRef} required />
              </div>
              <div className="mb-3">
                <label htmlFor="etapa" className="form-label">Etapa</label>
                <select id="etapa" className="form-select" ref={etapaRef} required>
                  <option value="">Seleccione...</option>
                  <option>Primera</option>
                  <option>Segunda</option>
                  <option>Tercera</option>
                  <option>Cuarta</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha</label>
                <input type="date" id="fecha" className="form-control" ref={fechaRef} required />
              </div>
              <div className="mb-3">
                <label htmlFor="hora" className="form-label">Hora</label>
                <input type="time" id="hora" className="form-control" ref={horaRef} required />
              </div>
              <div className="mb-3">
                <label htmlFor="tipo" className="form-label">Tipo de Sesión</label>
                <select id="tipo" className="form-select" ref={tipoRef} required>
                  <option value="">Seleccione...</option>
                  <option>Kinesiología</option>
                  <option>Fonoaudiología</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="profesional" className="form-label">Asignar Profesional</label>
                <select id="profesional" className="form-select" ref={profesionalRef} required>
                  <option value="">Seleccione...</option>
                  <option>Kinesiólogo</option>
                  <option>Fonoaudiólogo</option>
                </select>
              </div>

              <input type="hidden" value={boxSeleccionado} />
              <button type="submit" className="btn btn-success w-100">Confirmar Agendamiento</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Agendar;