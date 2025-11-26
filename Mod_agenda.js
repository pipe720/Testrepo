import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Agenda() {
  const [sesiones, setSesiones] = useState([]);
  const [fechaAgenda, setFechaAgenda] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sesionEditada, setSesionEditada] = useState(null);
  const [indexEditado, setIndexEditado] = useState(null);

  const horas = ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00"];

  // Cargar sesiones desde localStorage
  useEffect(() => {
    const guardadas = JSON.parse(localStorage.getItem("sesiones")) || [];
    if (guardadas.length === 0) {
      const ejemplo = [
        { fecha: "2025-09-02", hora: "09:00", boxId: 2, paciente: "Juan Pérez", tipo: "Kinesiología", profesional: "Dr. Soto" },
        { fecha: "2025-09-02", hora: "10:00", boxId: 5, paciente: "Ana López", tipo: "Fonoaudiología", profesional: "Lic. Rojas" },
        { fecha: "2025-09-02", hora: "15:00", boxId: 8, paciente: "Carlos Ruiz", tipo: "Kinesiología", profesional: "Dr. Díaz" }
      ];
      setSesiones(ejemplo);
      localStorage.setItem("sesiones", JSON.stringify(ejemplo));
    } else {
      setSesiones(guardadas);
    }

    const hoy = new Date().toISOString().split("T")[0];
    setFechaAgenda(hoy);
  }, []);

  const abrirEditarSesion = (sesion, index) => {
    setSesionEditada({ ...sesion });
    setIndexEditado(index);
    setModalVisible(true);
  };

  const guardarSesionEditada = () => {
    const actualizadas = [...sesiones];
    actualizadas[indexEditado] = sesionEditada;
    setSesiones(actualizadas);
    localStorage.setItem("sesiones", JSON.stringify(actualizadas));
    setModalVisible(false);
    alert("✅ La sesión fue modificada correctamente.");
  };

  const eliminarSesion = () => {
    if (indexEditado === null) return alert("No hay sesión seleccionada.");
    if (!window.confirm("¿Seguro que deseas eliminar esta sesión?")) return;

    const actualizadas = sesiones.filter((_, i) => i !== indexEditado);
    setSesiones(actualizadas);
    localStorage.setItem("sesiones", JSON.stringify(actualizadas));
    setModalVisible(false);
    alert("✅ La sesión fue eliminada correctamente.");
  };

  const renderCelda = (hora, box) => {
    const sesion = sesiones.find(s => s.fecha === fechaAgenda && s.hora === hora && s.boxId === box);
    if (sesion) {
      return (
        <td
          key={box}
          className="bg-danger text-white"
          style={{ cursor: 'pointer' }}
          onClick={() => abrirEditarSesion(sesion, sesiones.indexOf(sesion))}
        >
          <b>{sesion.paciente}</b><br />
          {sesion.profesional}<br />
          {sesion.tipo}
        </td>
      );
    } else {
      return <td key={box} className="bg-success text-white">Disponible</td>;
    }
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
                  <li><Link className="dropdown-item" to="#">Modificar horas</Link></li>
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
      <div/>
      <header className="bg-danger text-white text-center py-3">
        <h1>Modificar hora</h1>
      </header>
    <div/>

      <div className="container my-4">
        <h2>Agenda</h2>
        <input
          type="date"
          className="form-control mb-3"
          value={fechaAgenda}
          onChange={(e) => setFechaAgenda(e.target.value)}
        />

        <table className="table table-bordered" id="tablaAgenda">
          <thead>
            <tr>
              <th>Hora</th>
              {[...Array(12)].map((_, i) => <th key={i}>Box {i + 1}</th>)}
            </tr>
          </thead>
          <tbody>
            {horas.map(hora => (
              <tr key={hora}>
                <td>{hora}</td>
                {[...Array(12)].map((_, i) => renderCelda(hora, i + 1))}
              </tr>
            ))}
          </tbody>
        </table>

        {modalVisible && (
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Editar Sesión</h5>
                  <button type="button" className="btn-close" onClick={() => setModalVisible(false)}></button>
                </div>
                <div className="modal-body">
                  <input type="text" className="form-control mb-2" placeholder="Paciente"
                    value={sesionEditada.paciente} onChange={(e) => setSesionEditada({ ...sesionEditada, paciente: e.target.value })} />
                  <input type="text" className="form-control mb-2" placeholder="Profesional"
                    value={sesionEditada.profesional} onChange={(e) => setSesionEditada({ ...sesionEditada, profesional: e.target.value })} />
                  <input type="text" className="form-control mb-2" placeholder="Tipo"
                    value={sesionEditada.tipo} onChange={(e) => setSesionEditada({ ...sesionEditada, tipo: e.target.value })} />
                  <input type="date" className="form-control mb-2"
                    value={sesionEditada.fecha} onChange={(e) => setSesionEditada({ ...sesionEditada, fecha: e.target.value })} />
                  <input type="time" className="form-control mb-2"
                    value={sesionEditada.hora} onChange={(e) => setSesionEditada({ ...sesionEditada, hora: e.target.value })} />
                  <select className="form-select mb-2"
                    value={sesionEditada.boxId} onChange={(e) => setSesionEditada({ ...sesionEditada, boxId: parseInt(e.target.value) })}>
                    <option value="">Seleccione...</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>Box {i + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-success" onClick={guardarSesionEditada}>Guardar</button>
                  <button className="btn btn-danger" onClick={eliminarSesion}>Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
  );
}

      export default Agenda;