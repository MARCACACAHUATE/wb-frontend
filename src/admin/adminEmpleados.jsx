import React, { useEffect, useState } from "react";
import styles from "./../Pantallas/Inicio.module.css";
import { NavLink } from "react-router-dom";
import { reqqResapi } from "../api/reqRes";
import EmpleadosRow from '../componentes/empleadosRow';

const adminEmpleados = () => {
  const [isUpdate, setisUpdate] = useState(false);
  const [UserList, setUserList] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    getUsersList();
  }, [isUpdate]);

  const getUsersList = async() => {
    const Token = sessionStorage.getItem('token');
    console.log(Token);
    const headers = {
      'Authorization': 'Bearer '+Token,
    };

    console.log(headers);

    const res = await reqqResapi.get('api/users', { headers }).then(res => {

        if (res.data.error) {
              console.log(res.data.error);
        } else {
              console.log(res.data.data);
              setUserList(res.data.data);
        }
    });   
  }

const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredData = UserList.filter((item) => {
    // Convierte las propiedades de texto a minúsculas para una comparación insensible a mayúsculas y minúsculas
    const lowerCaseFilterText = filterText.toLowerCase();

    // Verifica si alguna de las propiedades del objeto coincide con el texto filtrado
    return (
      item.first_name.toLowerCase().includes(lowerCaseFilterText) ||
      item.last_name.toLowerCase().includes(lowerCaseFilterText) ||
      item.email.toLowerCase().includes(lowerCaseFilterText) ||
      item.telefono.toString().includes(filterText) ||
      item.calle.toLowerCase().includes(lowerCaseFilterText) ||
      item.numero.toLowerCase().includes(lowerCaseFilterText) ||
      item.municipio.toLowerCase().includes(lowerCaseFilterText)
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
                  Usuarios{" "}
                  <span className="text-muted fw-normal ms-2">
                    (#{UserList.length} Usuarios)
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
                <div>
                  <NavLink to="/Admin/adminFormEmpleados">
                    <button className="btn btn-outline-dark">
                      + Agregar Usuario
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
                        <th scope="col" className="admincol">Usuario ID</th>
                        <th scope="col" className="admincol">Primer Nombre</th>
                        <th scope="col" className="admincol">Primer Apellido</th>
                        <th scope="col" className="admincol">Email</th>
                        <th scope="col" className="admincol">Teléfono</th>
                        <th scope="col" className="admincol">Calle</th>
                        <th scope="col" className="admincol">Número</th>
                        <th scope="col" className="admincol">Municipio</th>
                        <th scope="col" className="admincol">Usuario</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          filteredData?.map(empleado => (
                              <EmpleadosRow key={empleado.id} empleado={empleado} update={isUpdate} setUpdate={setisUpdate}/>
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
                <p className="mb-sm-0">Mostrando #{UserList.length} Usuarios</p>
              </div>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default adminEmpleados

