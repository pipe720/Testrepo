import { Link } from 'react-router-dom';
import "./Admin.css"


function Admin() {
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
        <h1>Bienvenido pagina administración</h1>
    </header>
    </center>

    <center>
        <div className="row justify-content-center align-items-center row-cols-1 row-cols-md-3 g-4 mt-4">
            <div className="col">
                <div className="card">
                    <div className="card-body bg-danger">
                        <h5 className="card-title text-white">Ver usuarios</h5>
                        <center>
                            <Link to="/ver_usuarios">
                                <button type="button" className="btn btn-primary">Ir a</button>
                            </Link>
                        </center>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body bg-danger">
                        <h5 className="card-title text-white">Crear - eliminar - modificar usuarios</h5>
                        <center>
                            <Link to="crear_usuarios">
                                <button type="button" className="btn btn-primary">Ir a</button>
                            </Link>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </center>

</div>








  );
}

export default Admin;


