import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const Ver_usuarios = () => {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    rut: "",
    ciudad: "",
    rol: ""
  });

  // Estado para resultados (tabla)
  const [usuarios, setUsuarios] = useState([
    { rol: "Doctor", nombre: "Felipe", apellido: "Burguer", correo: "burger@edu.com", rut: "19.200.200-1", ciudad: "Santiago" },
    { rol: "Enfermero", nombre: "Eduardo", apellido: "ash", correo: "ashr@edu.com", rut: "18.200.200-2", ciudad: "Talca" },
    { rol: "Enfermero", nombre: "Jose", apellido: "ej", correo: "ej@edu.com", rut: "20.200.200-3", ciudad: "Valparaiso" },
    { rol: "Doctor", nombre: "Carlos", apellido: "edvargas", correo: "edvargas@edu.com", rut: "15.300.200-4", ciudad: "Santiago" },
    { rol: "Administrador", nombre: "Rodrigo", apellido: "palo", correo: "palo@edu.com", rut: "20.200.200-5", ciudad: "Temuco" }
  ]);

  // Manejar cambios en inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id.replace("validacion", "").toLowerCase()]: e.target.value });
  };

  // Buscar usuarios (ejemplo simple: filtrar por nombre o apellido)
  const validarEnvio = () => {
    const filtrados = usuarios.filter(
      (u) =>
        (formData.nombre === "" || u.nombre.toLowerCase().includes(formData.nombre.toLowerCase())) &&
        (formData.apellido === "" || u.apellido.toLowerCase().includes(formData.apellido.toLowerCase())) &&
        (formData.correo === "" || u.correo.toLowerCase().includes(formData.correo.toLowerCase())) &&
        (formData.rut === "" || u.rut.includes(formData.rut)) &&
        (formData.ciudad === "" || u.ciudad === formData.ciudad) &&
        (formData.rol === "" || u.rol.toLowerCase().includes(formData.rol.toLowerCase()))
    );
    setUsuarios(filtrados);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Admin">Home</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" target="_blank" to="/crear_usuarios">Crear usuarios</Link></li>
              <li className="nav-item"><Link className="nav-link" to="#">Ver usuarios</Link></li>
            </ul>
            <ul className="navbar-nav me2 mb-2 mb-lg-0">
              <li className="nav-item"><Link className="navbar-brand" href="/auth">Cerrar sesión</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Cabecera */}
      <header className="bg-danger text-white text-center py-3">
        <h1>Búsqueda de usuarios</h1>
      </header>

      {/* Formulario */}
      <div className="contenedor_form container mt-4">
        <form className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Primer nombre</label>
            <input type="text" className="form-control" id="validacionNombre" value={formData.nombre} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Apellido</label>
            <input type="text" className="form-control" id="validacionApellido" value={formData.apellido} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Correo electrónico</label>
            <div className="input-group has-validation">
              <input type="text" className="form-control" id="validacionCorreo" value={formData.correo} onChange={handleChange} />
              <span className="input-group-text">@eduDown</span>
            </div>
          </div>
          <div className="col-md-4">
            <label className="form-label">RUT</label>
            <input type="text" className="form-control" id="validacionRut" value={formData.rut} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Ciudad</label>
            <select className="form-select" id="validacionCiudad" value={formData.ciudad} onChange={handleChange}>
              <option value="">Seleccione...</option>
              <option>Arica</option><option>Iquique</option><option>Antofagasta</option><option>La serena</option>
              <option>Valparaiso</option><option>Santiago</option><option>Talca</option><option>Chillán</option>
              <option>Concepción</option><option>Temuco</option><option>Valdivia</option><option>Puerto Montt</option>
              <option>Coyhaique</option><option>Punta Arenas</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Rol</label>
            <input type="text" className="form-control" id="validacionRol" value={formData.rol} onChange={handleChange} />
          </div>
          <div className="col-12">
            <button type="button" onClick={validarEnvio} className="btn btn-primary">Buscar</button>
          </div>
        </form>
      </div>

      {/* Tabla */}
      <div className="container mt-5">
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Rol</th><th>Nombre</th><th>Apellido</th><th>Correo</th><th>Rut</th><th>Ciudad</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u, i) => (
              <tr key={i}>
                <td>{u.rol}</td>
                <td>{u.nombre}</td>
                <td>{u.apellido}</td>
                <td>{u.correo}</td>
                <td>{u.rut}</td>
                <td>{u.ciudad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ver_usuarios;