
// eslint-disable-next-line no-unused-vars
import React from "react";
import './styles.css';

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand">  
            <img src="/images/Logonty.png" alt="" />          
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Catalogo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}

export default NavBar;
