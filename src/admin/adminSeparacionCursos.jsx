import React from 'react'
import styles from "./../Pantallas/Inicio.module.css";
import { NavLink } from "react-router-dom";
import {useNavigate, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { reqqResapi } from "../api/reqRes";


const adminSeparacionCursos = ({ }) => {
    const { id } = useParams();
    const [separaciones, setSeparaciones] = useState([]);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSeparaciones, setFilteredSeparaciones] = useState([]);

    useEffect(() => {
        const getSeparaciones = async () => {
          try {
            const response = await reqqResapi.get('api/CursoSeparacion');
            console.log(response.data);
            console.log(id);
            console.log(separaciones.cursosIdCursos);
            //const separacionesFiltradas = response.data.filter((separacion) => separacion.CursosIdCursos === id);
            
            const separacionesFiltradas = response.data.filter((separacion) => {
                const cursosId = parseInt(separacion.cursosIdCursos);
                const filtroId = parseInt(id);
                return cursosId === filtroId;
              });
            
            console.log(separacionesFiltradas);
            setSeparaciones(separacionesFiltradas);
          } catch (error) {
            console.log(error);
          }
        };

        getSeparaciones();
    }, [id]);

    const getSeparaciones = async () => {

        try {
            const response = await reqqResapi.get('api/CursoSeparacion');
            console.log(response.data);
            console.log(id);
            console.log(separaciones.cursosIdCursos);
            //const separacionesFiltradas = response.data.filter((separacion) => separacion.CursosIdCursos === id);
            
            const separacionesFiltradas = response.data.filter((separacion) => {
                const cursosId = parseInt(separacion.cursosIdCursos);
                const filtroId = parseInt(id);
                const searchValue = searchTerm.toLowerCase();
                return (
                    cursosId === filtroId ||
                    separacion.first_name.toLowerCase().includes(searchValue) ||
                    separacion.last_name.toLowerCase().includes(searchValue) ||
                    separacion.edad.toString().includes(searchValue) ||
                    separacion.telefono.toString().includes(searchValue) ||
                    separacion.email.toLowerCase().includes(searchValue) ||
                    separacion.cantidad_personas_contratadas.toString().includes(searchValue) ||
                    (separacion.tipoPago ? 'pagado' : 'pago de reservación').includes(searchValue)
                );
              });
            
            console.log(separacionesFiltradas);
            setSeparaciones(separacionesFiltradas);
          } catch (error) {
            console.log(error);
          }

        };


        // Filtra las separaciones en función del término de búsqueda
            useEffect(() => {
                const filtrarSeparaciones = () => {
                const filteredSeparaciones = separaciones.filter((cursoSeparacion) => {
                    const { first_name, last_name, edad, telefono, email, tipoPago } = cursoSeparacion;
                    const lowerCaseSearchTerm = searchTerm.toLowerCase();

                    return (
                    first_name.toLowerCase().includes(lowerCaseSearchTerm) ||
                    last_name.toLowerCase().includes(lowerCaseSearchTerm) ||
                    edad.toString().includes(searchTerm) ||
                    telefono.includes(searchTerm) ||
                    email.toLowerCase().includes(lowerCaseSearchTerm)
                    );
                });

                setFilteredSeparaciones(filteredSeparaciones);
                };

                filtrarSeparaciones();
            }, [separaciones, searchTerm]);

        

    const eliminarSeparacionCurso = async (id) => {
        const confirmacion = window.confirm('¿Estás seguro de eliminar esta separación?');
        if (confirmacion) {
          try {
            const response = await reqqResapi.delete(`api/CursoSeparacion/${id}`);
            console.log(response);
            // Actualizar la lista de cursos después de eliminar el curso
            getSeparaciones();
          } catch (error) {
            console.log(error);
          }


        }
      };

      
      


    return (
        <div className={styles.inicio}>
            {/* div tabla */}
            <div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <h5 className="card-title">
                                    Nombre del Curso{" "}
                                    <span className="text-muted fw-normal ms-2">
                                        (Personas)
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
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    {/* <button
                                        className="btn btn-outline-dark my-2 my-sm-0"
                                        type="submit"
                                    >
                                        Buscar
                                    </button> */}
                                </form>
                                <div>
                                    <NavLink to="/Admin/adminCursos">
                                        <button className="btn btn-outline-dark">
                                        &lt;- Regresar
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
                                                <th scope="col" className="admincol">Acción</th>
                                                <th scope="col" className="admincol">Nombre</th>
                                                <th scope="col" className="admincol">Apellido</th>
                                                <th scope="col" className="admincol">Edad</th>
                                                <th scope="col" className="admincol">Teléfono</th>
                                                <th scope="col" className="admincol">Email</th>
                                                <th scope="col" className="admincol">Cantidad de Personas</th>
                                                <th scope="col" className="admincol">Estatus de Pago</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                {separaciones.map((cursoSeparacion) => (
                                                <tr key={cursoSeparacion.Id}>
                                                    <td className="rowactionsSeparacionCurso">
                                                        <button type="button" className="btn btn-danger" onClick={() => eliminarSeparacionCurso(cursoSeparacion.id)}>
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
                                                    </td>
                                                    <td className="adminrow">{cursoSeparacion.first_name}</td>
                                                    <td className="adminrow">{cursoSeparacion.last_name}</td>
                                                    <td className="adminrow">{cursoSeparacion.edad}</td>
                                                    <td className="adminrow">{cursoSeparacion.telefono}</td>
                                                    <td className="adminrow">{cursoSeparacion.email}</td>
                                                    <td className="adminrow">{cursoSeparacion.cantidad_personas_contratadas}</td>
                                                    <td className="adminrow">{cursoSeparacion.tipoPago ? "Pagado" : "Pago de reservación"}</td>
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
                                <p className="mb-sm-0">Mostrando las separaciones de los cursos</p>
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
