import styles from "./../Pantallas/Inicio.module.css";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { reqqResapi } from "../api/reqRes";
import {useNavigate, Link } from "react-router-dom";
import { createPath } from 'react-router-dom';

const adminCursos = () => {
  const [cursos, setCursos] = useState([]);
  const navigate = useNavigate();
  // const history = useHistory();

  const getCursos = async () => {
    try {
      const response = await reqqResapi.get('api/Cursos/');
      console.log(response.data)
      setCursos(response.data); // Utiliza response.data para obtener los datos
    } catch (error) {
      console.log(error);
    }
  };

  const verSeparacionCursos = (cursoId) => {
    console.log(cursoId)
  navigate(`/admin/adminSeparacionCursos/${cursoId}`);
};

  const eliminarCurso = async (cursoId) => {
    const confirmacion = window.confirm('¿Estás seguro de eliminar el curso?');
    if (confirmacion) {
      try {
        const response = await reqqResapi.delete(`api/Cursos/${cursoId}`);
        console.log(response);
        // Actualizar la lista de cursos después de eliminar el curso
        getCursos();
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const modificarCurso = (cursoId) => {
  //   history.replace({
  //     pathname: '/admin/adminModificarCurso',
  //     state: { cursoId }
  //   });
  // };

    useEffect(() => {
      getCursos();
    }, []);

  return (
    <div className={styles.inicio}>
      {/* div tabla */}
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="mb-3">
                <h5 className="card-title">
                  Cursos{" "}
                  <span className="text-muted fw-normal ms-2">
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
                  <NavLink to="/Admin/adminFormCursos">
                    <button className="btn btn-outline-dark">
                      + Agregar Curso
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
                        <th scope="col" className="admincol">Curso</th>
                        <th scope="col" className="admincol">Temática</th>
                        <th scope="col" className="admincol">Detalles</th>
                        <th scope="col" className="admincol">Fecha Inicio</th>
                        <th scope="col" className="admincol">Fecha Fin</th>
                        <th scope="col" className="admincol">Costo Reservación</th>
                        <th scope="col" className="admincol">Costo Total</th>
                        <th scope="col" className="admincol">Calle</th>
                        <th scope="col" className="admincol">Número</th>
                        <th scope="col" className="admincol">Municipio</th>
                        <th scope="col" className="admincol">Estado del Curso</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cursos.map(curso => (
                      <tr key={curso.IdCursos}>
                        <td className="rowactionsCursos">
                          <button type="button" className="btn btn-info">
                          <Link to={`/admin/adminModificarCurso/${curso.idCursos}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-pencil"
                              viewBox="0 0 16 16"
                            >
                              {" "}
                              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                              {" "}
                            </svg>
                            </Link>
                          </button>
                          <button type="button" className="btn btn-danger" onClick={() => eliminarCurso(curso.idCursos)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-trash"
                              viewBox="0 0 16 16"
                            >
                              {" "}
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                              {" "}
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                              {" "}
                            </svg>
                          </button>
                          <Link to={`/admin/adminSeparacionCursos/${curso.idCursos}`}>
                          <button type="button" className="btn btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                              <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                            </svg>
                          </button>
                          </Link>
                        </td>
                        <td className="adminrow">{curso.nombre}</td>
                        <td className="adminrow">{curso.tematica}</td>
                        <td className="adminrow">{curso.detalle}</td>
                        <td className="adminrow">{curso.fechaInicio}</td>
                        <td className="adminrow">{curso.fechaFin}</td>
                        <td className="adminrow">{curso.costoReservacion}</td>
                        <td className="adminrow">{curso.costoTotal}</td>
                        <td className="adminrow">{curso.calle}</td>
                        <td className="adminrow">{curso.numero}</td>
                        <td className="adminrow">{curso.municipio}</td>
                        <td className="adminrow">{curso.estadoCursoName}</td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 align-items-center pb-4">
            <div className="col-sm-6">
              <div>
                <p className="mb-sm-0">Mostrando Cursos</p>
              </div>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default adminCursos

