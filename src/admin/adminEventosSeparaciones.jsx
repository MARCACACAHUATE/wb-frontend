import React, { useEffect, useState } from "react";
import styles from "./../Pantallas/Inicio.module.css";
import { reqqResapi } from "../api/reqRes";
import EventosSeparacionesRow from '../componentes/eventosSeparacionesRow';

const adminEventosSeparaciones = () => {
  const [isUpdate, setisUpdate] = useState(false);
  const [EventosSeparacionesList, setEventosSeparacionesList] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    getEventosSeparacionesList();
    // getEventosList();
  }, [isUpdate]);

  const getEventosSeparacionesList = async() => {
    const res = await reqqResapi.get('api/eventosseparacions',{params:{
      month:"mayo",
      year:"2023"
    }}).then(async res => {

        const res2 = await reqqResapi.get('api/eventos').then(res2 => {
                res.data.data.forEach((separacion,index) => {
                  res2.data.data.forEach(eventos => {
                    if (separacion.id_Evento===eventos.id) {
                      res.data.data[index].nombrePaquete = eventos.nombrePaquete;
                      res.data.data[index].evento = eventos;
                    }
                  });                  
                });
      });
      res.data.data.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      console.log(res.data.data);
        setEventosSeparacionesList(res.data.data);                   
    });   
  }

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredData = EventosSeparacionesList.filter((item) => {
    // Convierte las propiedades de texto a minúsculas para una comparación insensible a mayúsculas y minúsculas
    const lowerCaseFilterText = filterText.toLowerCase();

    // Verifica si alguna de las propiedades del objeto coincide con el texto filtrado
    return (
      item.firstName.toLowerCase().includes(lowerCaseFilterText) ||
      item.lastName.toLowerCase().includes(lowerCaseFilterText) ||
      item.telefono.toLowerCase().includes(lowerCaseFilterText) ||
      item.email.toLowerCase().includes(lowerCaseFilterText) ||
      item.calle.toLowerCase().includes(lowerCaseFilterText) ||
      item.colonia.toLowerCase().includes(lowerCaseFilterText) ||
      item.nombrePaquete.toLowerCase().includes(lowerCaseFilterText)
    );
  });

  return (
    <div className={styles.inicio}>
      {/* div tabla */}
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="mb-3">
                <h5 className="card-title">
                separaciónes de Eventos{" "}
                  <span className="text-muted fw-normal ms-2">
                    (#{EventosSeparacionesList.length} separaciónes de Eventos)
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
                    value={filterText}
                    onChange={handleFilterChange}
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
                        <th scope="col" className="admincol">Teléfono</th>
                        <th scope="col" className="admincol">Email</th>
                        <th scope="col" className="admincol">Direccion</th>
                        <th scope="col" className="admincol">Estatus</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                          filteredData?.map(separacion => (
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
                <p className="mb-sm-0">Mostrando #{EventosSeparacionesList.length} separaciónes de Eventos</p>
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
