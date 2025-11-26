import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Box from './Box';
import Agendar from './Agendar';
import ModAgenda from './Mod_agenda';
import Paciente from './Paciente';
import Reportes from './Reportes';
import Insumos from './Insumos';
import Auth from './Auth';
import CrearUsuarios from './Crear_usuarios';
import VerUsuarios from './Ver_usuarios';
import Admin from './Admin'
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/box" element={<Box />} />
        <Route path="/agendar" element={<Agendar />} />
        <Route path="/mod_agenda" element={<ModAgenda />} />
        <Route path="/paciente" element={<Paciente />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/insumos" element={<Insumos />} />
        <Route path="/crear_usuarios" element={<CrearUsuarios />} />
        <Route path="/ver_usuarios" element={<VerUsuarios />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
