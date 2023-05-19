import React, { useEffect, useState } from "react";
import styles from "./../Pantallas/Inicio.module.css";
import { reqqResapi } from "../api/reqRes";
import EventosSeparacionesRow from '../componentes/eventosSeparacionesRow';

const adminEventosSeparaciones = () => {
  const [isUpdate, setisUpdate] = useState(false);
  const [isUpdate2, setisUpdate2] = useState(false);
  const [EventosList, setEventosList] = useState([]);
  const [EventosSeparacionesList, setEventosSeparacionesList] = useState([]);

  useEffect(() => {
    getEventosSeparacionesList();
  }, [isUpdate]);

  const getEventosSeparacionesList = async() => {
    const res = await reqqResapi.get('api/eventosseparacions',{params:{
      month:"mayo",
      year:"2023"
    }}).then(res => {

        if (res.data.error) {
              console.log(res.data.error);
        } else {
              console.log(res.data.data);
              // setEventosSeparacionesList(res.data.data);
              // getEventosList();
              // let separaciones = [];
              // let indice = 0;

              // if (res.data.data) {
              //   res.data.data.forEach(evento => {
              //       separaciones.push(evento.separacion);
              //       separaciones[indice].nombrePaquete = evento.nombrePaquete;
              //       indice++;         
              //   });
              //   console.log(separaciones);
                setEventosSeparacionesList(res.data.data);
              // }

              
        }

    });   
  }

  return (
    <div className={styles.inicio}>
      {/* div tabla */}
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="mb-3">
                <h5 className="card-title">
                Separaciones de Eventos{" "}
                  <span className="text-muted fw-normal ms-2">
                    (#20 Separaciones de Eventos)
                  </span>
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-dark my-2 my-sm-0"
                    type="submit"
                  >
                    Buscar
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 fondotabla">
              <div className="">
                <div className="table-responsive">
                  <table className="table project-list-table table-nowrap align-middle table-borderless">
                    <thead>
                      <tr>
                        <th scope="col" className="admincol" style={{ width: "200px" }}>
                          Acciones
                        </th>
                        <th scope="col" className="admincol">Fecha Evento</th>
                        <th scope="col" className="admincol">Hora evento</th>
                        <th scope="col" className="admincol">Nombre del paquete</th>
                        <th scope="col" className="admincol">Nombre del cliente</th>
                        <th scope="col" className="admincol">telefono</th>
                        <th scope="col" className="admincol">Email</th>
                        <th scope="col" className="admincol">Direccion</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                          EventosSeparacionesList?.map(separacion => (
                              <EventosSeparacionesRow key={separacion.id} separacion={separacion} update={isUpdate} setUpdate={setisUpdate}/>
                          ))                     
                        }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 align-items-center pb-4">
            <div className="col-sm-6">
              <div>
                <p className="mb-sm-0">Mostrando #20 Separaciones de Eventos</p>
              </div>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default adminEventosSeparaciones;
