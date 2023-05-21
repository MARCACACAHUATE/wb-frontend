import React from 'react'
import logo from './../img/logo1.png'
import styles from "./../Pantallas/Inicio.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { reqqResapi } from "../api/reqRes";


const adminFormCursos = () => {

  const { state } = useLocation();
 
  let curso = {};

  if (state!=undefined) {
    curso = state.curso;
    console.log(curso);
    
  }

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {

    if (state!=undefined) {
      ModifyEvento(data);
    }else{
      saveEvento(data);
    }
  };

  const saveEvento = async (Jsonsend) => {

    console.log(Jsonsend);

    //llamado al api promesa y se le asigna la interfaz
    const resp = await reqqResapi.post("api/cursos/",Jsonsend).then((res) => {
      if (res.data.error) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
        navigate("/Admin/adminCursos");
      }
    });
  };

  const ModifyEvento = async (Jsonsend) => {

    console.log(Jsonsend);

    //llamado al api promesa y se le asigna la interfaz
    const resp = await reqqResapi.put("api/eventos/"+curso.IdCursos,Jsonsend).then((res) => {
      if (res.data.error) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
        navigate("/Admin/adminCursos");
      }
    });
  };


  return (
    <div className={styles.inicio}>

        <div className="container contact">
          <form onSubmit={handleSubmit(onSubmit)} className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <img src={logo} alt="Logo"/>
                <h2>Cursos</h2>
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-form">
                <div className="form-group form-cont form-cont">
                  <label className="control-label col-sm-6 label" for="fname">Nombre del curso:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="fname" placeholder="Ingresa el nombre del curso" name="fname" {...register("nombreCurso")} defaultValue={curso.Nombre} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="lname">Temática:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa la temática" name="lname" {...register("tematica")} defaultValue={curso.Tematica} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="email">Detalles:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="email" placeholder="Ingresa los detalle " name="lname" {...register("detalle")} defaultValue={curso.Detalle} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="email">Cupo Máximo:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="email" placeholder="Ingresa una cantidad de personas" name="lname" {...register("cupo")} defaultValue={curso.Cupo} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Fecha inicio:</label>
                  <div className="col-sm-10">
                  <input type="date" className="form-control" id="lname" name="lname" {...register("fechaInicio")} defaultValue={curso.fechaInicio} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Fecha fin:</label>
                  <div className="col-sm-10">
                  <input type="date" className="form-control" id="lname" name="lname" {...register("fechaFin")} defaultValue={curso.fechaFin} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Costo de reservación:</label>
                  <div className="col-sm-10">
                  <input type="number" className="form-control" id="lname" placeholder="Ingresa el costo de reservación" name="lname" {...register("CostoReservacion")} defaultValue={curso.CostoReservacion} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Costo de total:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el costo de total" name="lname" {...register("CostoTotal")} defaultValue={curso.CostoTotal} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Calle:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa la calle" name="lname" {...register("Calle")} defaultValue={curso.Calle} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Número:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el número" name="lname" {...register("Numero")} defaultValue={curso.Numero} disabled={sessionStorage.getItem('role')!="Admin"} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Municipio:</label>
                  <div className="col-sm-10">
                  <select className='form-control' {...register("id_Municipio")}>
                    <option value="1" selected={curso.id_Municipio=="1"}>Monterrey</option>
                    <option value="2" selected={curso.id_Municipio=="2"}>San Nicolas</option>
                    <option value="3" selected={curso.id_Municipio=="3"}>Gudalaupe</option>
                  </select>
                  </div>
                </div>
                <div className="form-group form-cont">        
                  <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Crear Curso</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
export default adminFormCursos

