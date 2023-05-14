import React from 'react'
import styles from "./../Pantallas/Inicio.module.css";
import { NavLink } from "react-router-dom";

const adminEmpleados = () => {
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
                    (#20 Usuarios)
                  </span>
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-dark my-2 my-sm-0"
                    type="submit"
                  >
                    Search
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
                        <th scope="col" className="admincol">Usuario</th>
                        <th scope="col" className="admincol">Primer Nombre</th>
                        <th scope="col" className="admincol">Primer Apellido</th>
                        <th scope="col" className="admincol">Email</th>
                        <th scope="col" className="admincol">Password</th>
                        <th scope="col" className="admincol">Teléfono</th>
                        <th scope="col" className="admincol">Calle</th>
                        <th scope="col" className="admincol">Número</th>
                        <th scope="col" className="admincol">Municipio</th>
                        <th scope="col" className="admincol">Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="rowactions">
                          <button type="button" class="btn btn-info">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-pencil"
                              viewBox="0 0 16 16"
                            >
                              {" "}
                              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                              {" "}
                            </svg>
                          </button>
                          <button type="button" class="btn btn-danger">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-trash"
                              viewBox="0 0 16 16"
                            >
                              {" "}
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                              {" "}
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                              {" "}
                            </svg>
                          </button>
                        </td>
                        <td className="adminrow">1234</td>
                        <td className="adminrow"> Tostiboy</td>
                        <td className="adminrow">Rodriguez</td>
                        <td className="adminrow">Tostiboy@gmail.com</td>
                        <td className="adminrow">Tostiboy12</td>
                        <td className="adminrow">8181818181</td>
                        <td className="adminrow">Av. Universidad</td>
                        <td className="adminrow">#450</td>
                        <td className="adminrow">Escobedo</td>
                        <td className="adminrow">Nuevo León</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 align-items-center pb-4">
            <div className="col-sm-6">
              <div>
                <p className="mb-sm-0">Mostrando #20 Usuarios</p>
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

