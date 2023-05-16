import React, { useEffect, useState } from "react";
import styles from "./../Pantallas/Inicio.module.css";
import { NavLink } from "react-router-dom";
import { reqqResapi } from "../api/reqRes";
import EventosRow from '../componentes/eventosRow';

const adminEventos = () => {
  const [isUpdate, setisUpdate] = useState(false);
  const [EventosList, setEventosList] = useState([]);

  useEffect(() => {
    getEventosList();
  }, [isUpdate]);

  const getEventosList = async() => {

    const res = await reqqResapi.get('api/eventos').then(res => {

        if (res.data.error) {
              console.log(res.data.error);
        } else {
              console.log(res.data.data);
              setEventosList(res.data.data);
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
                  Eventos{" "}
                  <span className="text-muted fw-normal ms-2">
                    (#20 Eventos)
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
                <div>
                  <NavLink to="/Admin/adminFormEventos">
                    <button className="btn btn-outline-dark">
                      + Agregar Evento
                    </button>
                  </NavLink>
                </div>
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
                        <th scope="col" className="admincol">Paquete</th>
                        <th scope="col" className="admincol">Ocasión</th>
                        <th scope="col" className="admincol">Servicios</th>
                        <th scope="col" className="admincol">Mobiliario</th>
                        <th scope="col" className="admincol">Color-Globos</th>
                        <th scope="col" className="admincol">Envio</th>
                        <th scope="col" className="admincol">Reservacion</th>
                        <th scope="col" className="admincol">Total</th>
                        <th scope="col" className="admincol">Estado</th>
                        <th scope="col" className="admincol">Municipio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          EventosList?.map(evento => (
                              <EventosRow key={evento.id} evento={evento} update={isUpdate} setUpdate={setisUpdate}/>
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
                <p className="mb-sm-0">Mostrando #20 Eventos</p>
              </div>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default adminEventos;
