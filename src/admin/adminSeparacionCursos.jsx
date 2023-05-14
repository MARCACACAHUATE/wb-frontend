import React from 'react'
import styles from "./../Pantallas/Inicio.module.css";
import { NavLink } from "react-router-dom";

const adminSeparacionCursos = () => {
    return (
      <div className={styles.inicio}>
        {/* div tabla */}
        <div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="mb-3">
                  <h5 className="card-title">
                    Personas{" "}
                    <span className="text-muted fw-normal ms-2">
                      (#20 Personas)
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
                          <th scope="col" className="admincol">Primer Nombre</th>
                          <th scope="col" className="admincol">Primer Apellido</th>
                          <th scope="col" className="admincol">Edad</th>
                          <th scope="col" className="admincol">Teléfono</th>
                          <th scope="col" className="admincol">Email</th>
                          <th scope="col" className="admincol">Cantidad de Personas</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="adminrow">1234</td>
                          <td className="adminrow"> Tostiboy</td>
                          <td className="adminrow">Rodriguez</td>
                          <td className="adminrow">Tostiboy@gmail.com</td>
                          <td className="adminrow">Tostiboy12</td>
                          <td className="adminrow">8</td>
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
                  <p className="mb-sm-0">Mostrando #20 Personas</p>
                </div>
              </div>
              <div className="col-sm-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default adminSeparacionCursos