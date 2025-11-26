import { Link } from 'react-router-dom';
import "./inicio.css"

function Inicio() {
  return (

    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ul className="navbar-nav me2 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="navbar-brand" to="/auth">Cerrar sesion</Link>
            </li>
          </ul>
        </div>
      </nav>

      <center>
        <header className="bg-danger text-white text-center py-3">
          <h1>Bienvenido a la plataforma de gestión de horas</h1>
        </header>
      </center>

      <div className="row justify-content-center align-items-center row-cols-1 row-cols-md-3 g-4 mt-4">
        <div className="col">
          <div className="card">
            <div className="card-body bg-danger">
              <h5 className="card-title text-white">Gestiones de box</h5>
              <center>
                <Link to="/Box">
                  <button type="button" className="btn btn-primary">Ir a</button>
                </Link>
              </center>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body bg-danger">
              <h5 className="card-title text-white">Agendar horas</h5>
              <center>
                <Link to="/Agendar">
                  <button type="button" className="btn btn-primary">Ir a</button>
                </Link>
              </center>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body bg-danger">
              <h5 className="card-title text-white">Modificar agenda</h5>
              <center>
                <Link to="/Mod_agenda">
                  <button type="button" className="btn btn-primary">Ir a</button>
                </Link>
              </center>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body bg-danger">
              <h5 className="card-title text-white">Gestión de pacientes</h5>
              <center>
                <Link to="Paciente">
                  <button type="button" className="btn btn-primary">Ir a</button>
                </Link>
              </center>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body bg-danger">
              <h5 className="card-title text-white">Reportes</h5>
              <center>
                <Link to="Reportes">
                  <button type="button" className="btn btn-primary">Ir a</button>
                </Link>
              </center>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body bg-danger">
              <h5 className="card-title text-white">Inventario insumos</h5>
              <center>
                <Link to="Insumos">
                  <button type="button" className="btn btn-primary">Ir a</button>
                </Link>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Inicio;
