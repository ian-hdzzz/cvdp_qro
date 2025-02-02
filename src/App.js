import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; // Importar el componente Home
import Asesoria from './pages/asesoria.js';
import Practicas from './pages/practicas.js';
import Empresa from './pages/empresas.js';
import Recursos from './pages/recursos.js';
import Challenge from './pages/challenge.js';
import Conocenos from './pages/conocenos.js';
import Navbar from './components/navbar.js'; // Importar el Navbar
import './App.css';

function App() {
  return (
    <Router>
      {/* Incluir el Navbar en la App */}
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/asesorias" element={<Asesoria />} />
        <Route path="/practicas" element={<Practicas />} />
        <Route path="/empresas" element={<Empresa />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/conocenos" element={<Conocenos />} />
      </Routes>
    </Router>
  );
}

export default App;
