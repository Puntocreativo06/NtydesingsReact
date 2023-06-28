import React from "react";
import Cart from "./NavBar-items/cart";
import Logo from "./NavBar-items/logo";
import './styles.css';


function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand ">  
           <Logo />         
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">x</span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ">
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
            <div className="d-grid gap-2 d-md-flex justify-content-md">
          <a className="navbar-brand d-flex" href="#">
            <Cart/>
          </a>
        </div>
            
          </div>
          
        </div>
        
      </nav>
    </>
  );
}

export default NavBar;
