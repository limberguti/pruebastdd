import React from "react";
import agregar from "../img/agregar.png";
import modificar from "../img/modificar.png";
import buscar from "../img/buscar.png";
import LogoEspe from "../img/logoespe.png";
import { Link } from "react-router-dom";



const GestionContratos = () => {

  const handleReturn = () => {
    // Redirigir al componente de inicio de sesión
    window.location.href = "http://localhost:3000/HomeC";
  };

  return (
    <section className="gestion">
      <header className="d-flex justify-content-center">
        <img src={LogoEspe} alt="" />
      </header>
      <label><strong> Contratos </strong> </label>
      <div class="container">
        <div className="row custom-row">
          <div className="col-lg-3 justify-content-center align-center">
            <img src={agregar} alt="" className="imagen" />
            <Link to="/AddContratos" className="enlace"> <h1> Agregar </h1> </Link>
          </div>
          <div className="col-lg-3">
            <img src={modificar} alt="" className="imagen" />
            <Link to="/UpdateContrato" className="enlace"> <h1>Modificar</h1></Link>
          </div>
          <div className="col-lg-3">
            <img src={buscar} alt="" className="imagen" />
            <Link to="/SearchContrato" className="enlace"> <h1>Buscar</h1></Link>
          </div>
        </div>
      </div>
      <button onClick={handleReturn}>Regresar</button>
      <footer className="footer fixed-bottom">
        <span className="text-left"> Universidad de las Fuerzas Armadas ESPE <br></br> Todos los derechos reservados 2023</span>
      </footer>
    </section>
  );
};

export default GestionContratos;
