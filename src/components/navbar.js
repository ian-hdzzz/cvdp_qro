import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './navbar.css';

function NavBar() {
    const [isMobile, setIsMobile] = useState(false);  // Estado para controlar el menú desplegable

    const toggleMenu = () => {
        setIsMobile(!isMobile);  // Cambiar el estado cuando se hace clic en el icono
    };
    return (
        <nav className="nav">
            <div className="menu" onClick={toggleMenu}>
                <i className={`fa-solid fa-bars ${isMobile ? 'hidden' : ''}`}></i>
            </div>
            <div className="logo">
                CVDP
            </div>
            <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
                <i onClick={toggleMenu} className={`fa-solid fa-x ${isMobile ? '' : 'hidden'}`}></i>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/asesorias">Asesoría experiencia profesional</Link></li>
                <li><Link to="/practicas">Prácticas profesionales y empleo</Link></li>
                <li><Link to="/empresas">¿Eres empresa?</Link></li>
                <li><Link to="/recursos">Recursos</Link></li>
                <li><Link to="/challenge">CVDP Challenge</Link></li>
                <li><Link to="/conocenos">Conócenos</Link></li>
            </ul>
          
        </nav>

    );
  }
  
  export default NavBar;