import React, { useState, useEffect } from "react";
import LogoEspe from "../img/logoespe.png";
import axios from "axios";

const SearchContrato = () => {
  //Api creada
  const [contr, setContr] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContr, setFilteredContr] = useState([]);

  useEffect(() => {
    const getContract = () => {
      fetch(`http://localhost:8800/api`)
        .then((res) => res.json())
        .then((res) => {
          setContr(res);
        });
    };
    getContract();
  }, []);

  const handleReturn = () => {
    // Redirigir al componente de inicio de sesión
    window.location.href = "http://localhost:3000/GestionContratos";
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredContr([]);
      return;
    }

    const delayTimer = setTimeout(() => {
      axios
        .get(`http://localhost:8800/api/contrato/?search=${searchQuery}`)
        .then((response) => {
          setFilteredContr(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setFilteredContr([]);
        });
    }, 300);

    return () => clearTimeout(delayTimer);
  }, [searchQuery]);

  return (
    <section className="buscarp">
      <header className="d-flex justify-content-center">
        <img src={LogoEspe} alt="" className="logo-espe" />
      </header>
      <div className="contenido-buscar">
        <h2>Buscar Datos de Contratos</h2>
        <div className="search__container">
          <input
            type="text"
            placeholder="BUSCAR...."
            className="search__input"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={handleReturn}
            className="search__return"
          >
            Regresar
          </button>
        </div>
        {filteredContr.length === 0 ? (
          <p>No se encontraron resultados</p>
        ) : (
          <div className="table-responsive">
            <table className="content-table">
              <thead>
                <tr>
                  <th>ID Contrato</th>
                  <th>ID Docente</th>
                  <th>ID Requerimiento</th>
                  <th>Fecha Inicio</th>
                  <th>Fecha Fin</th>
                  <th>Fuente</th>
                  <th>Fecha</th>
                  <th>Certificacion Presupuestaria</th>
                  <th>ID Memo</th>
                  <th>Analista del Proceso</th>
                  <th>Archivo Memo</th>
                </tr>
              </thead>
              <tbody>
                {filteredContr.map((contr) => (
                  <tr key={contr.IDCONTRATO}>
                    <td>{contr.IDCONTRATO}</td>
                    <td>{contr.IDDOCENTE}</td>
                    <td>{contr.IDREQUERIMIENTO}</td>
                    <td style={{ width: "106px" }}>{contr.FECHAINICIO.substring(0, 10)}</td>
                    <td style={{ width: "106px" }}>{contr.FECHAFIN.substring(0, 10)}</td>
                    <td>{contr.FUENTE}</td>
                    <td style={{ width: "106px" }}>{contr.FECHA.substring(0, 10)}</td>
                    <td>{contr.CERTIFICACION_PRESUPUESTARIA}</td>
                    <td>{contr.IDMEMO}</td>
                    <td>{contr.ANALISTADELPROCESO}</td>
                    <td>{contr.ARCHIVOMEMO}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <footer className="footer mt-auto">
        <span className="text-left">
          {" "}
          Universidad de las Fuerzas Armadas ESPE <br></br> Todos los derechos
          reservados 2023
        </span>
      </footer>
    </section>
  );
};
export default SearchContrato;
