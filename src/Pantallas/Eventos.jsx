import React, { useEffect, useState } from "react";
import "./Eventos.css";
import ButtonsE from "../Componentes/BotonesEventos.jsx";
import data from "./DatosEventos.js";
import { reqqResapi } from "../api/reqRes";
import styles from "./../Pantallas/Calendario.module.css";
import { NavLink } from "react-router-dom";

const Eventos = () => {
  const [isUpdate, setisUpdate] = useState(false);
  const [EventosList, setEventosList] = useState([]);

  useEffect(() => {
    getEventosList();
  }, [isUpdate]);

  const getEventosList = async () => {
    const res = await reqqResapi.get("api/eventos").then((res) => {
      if (res.data.error) {
        console.log(res.data.error);
      } else {
        res.data.data.sort((a, b) => new Date(b.id) - new Date(a.id));

        const arregloFiltrado = res.data.data.filter((elemento) => elemento.separacion === null);

        setEventosList(arregloFiltrado);
        console.log(arregloFiltrado);
      }
    });
  };

  return (
    <div className="even">
      {/* <div className={styles.cont1}>
        <br /><br />
        <h1 className={styles.titulo}>
        ¡Da un vistazo a nuestros paquetes de Eventos!
        </h1>
        <nav className={styles.submenu}>
        <NavLink to="/Calendario"smooth
                    duration={500} className={styles.callToAction} >Armar mi evento</NavLink>&nbsp;
        
        </nav>
        <br /><br />
      </div> */}

      <div className={styles.nav2}>
        <div className={styles.titleContainer}>
          <br /><br />
          <h1 className={styles.titulo}>
            ¡Da un vistazo a nuestros paquetes para eventos!{" "}
          </h1>
        </div>
        <div className="persocurso">
          <nav className={styles.submenu}>
            <NavLink
              to="/Eventos/armatuEvento"
              smooth
              duration={500}
              className={styles.callToAction}
            >
              ¡Entra y personaliza tu evento!
            </NavLink>
            
          </nav>
        </div>
        
      </div>
      <ul className="cuadros">
        {EventosList.map((paquete) => (
          <ButtonsE key={paquete.id} paquete={paquete} />
        ))}
      </ul>
    </div>
  );
};

export default Eventos;
