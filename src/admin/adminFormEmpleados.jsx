import React from 'react'
import logo from './../img/logo1.png'
import styles from "./../Pantallas/Inicio.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { reqqResapi } from "../api/reqRes";

const adminFormCursos = () => {
  
  const { state } = useLocation();
 
  let empleado = {};

  if (state!=undefined) {
    empleado = state.empleado;
    console.log(empleado);
    
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
    const resp = await reqqResapi.post("api/users/",Jsonsend).then((res) => {
      if (res.data.error) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
        navigate("/Admin/adminEmpleados");
      }
    });
  };

  const ModifyEvento = async (Jsonsend) => {

    console.log(Jsonsend);

    //llamado al api promesa y se le asigna la interfaz
    const resp = await reqqResapi.put("api/users/"+empleado.id,Jsonsend).then((res) => {
      if (res.data.error) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
        navigate("/Admin/adminEmpleados");
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
                <h2>
                {state!=undefined
                ? "Modificar Usuario: " + empleado.first_name + " " + empleado.last_name
                : "Agregar Usuario"}
                </h2>
              </div>
            </div>
            <div className="col-md-9">
              <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Tipo de Usuario:</label>
                  <div className="col-sm-10">
                  <select className='form-control' {...register("id_TipoUser")}>
                    <option value="1" selected={empleado.id_TipoUser=="1"}>Administrador</option>
                    <option value="2" selected={empleado.id_TipoUser=="2"}>Empleado</option>
                  </select>
                  </div>
                </div>
              <div className="contact-form">
                <div className="form-group form-cont form-cont">
                  <label className="control-label col-sm-6 label" for="fname">Primer Nombre:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="fname" placeholder="Ingresa el nombre" name="fname" {...register("first_name")} defaultValue={empleado.first_name} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="lname">Primer Apellido:</label>
                  <div className="col-sm-10">          
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el apellido" name="lname" {...register("last_name")} defaultValue={empleado.last_name} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="email">Email:</label>
                  <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" placeholder="ejemplo@dominio.com" name="email" {...register("email")} defaultValue={empleado.email} required/>
                  </div>
                </div>
                {
                  Object.keys(empleado).length > 0
                  ?(<>
                  
                  </>)
                  :(<>
                    <div className="form-group form-cont">
                    <label className="control-label col-sm-6 label" for="comment">Contraseña:</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="lname" placeholder="Ingresa la contraseña" name="lname" {...register("password", {
                      required: 'La contraseña es requerida',
                      minLength: {
                        value: 8,
                        message: 'La contraseña debe tener al menos 8 caracteres'
                      }
                    })} defaultValue={empleado.password} required/>
                    </div>
                    </div>
                    <div className="form-group form-cont">
                      <label className="control-label col-sm-6 label" for="comment">Confirmar contraseña:</label>
                      <div className="col-sm-10">
                      <input type="text" className="form-control" id="lname" placeholder="Ingresa la contraseña" name="lname" {...register("confirmPassword", {
                        required: 'La contraseña es requerida',
                        minLength: {
                          value: 8,
                          message: 'La contraseña debe tener al menos 8 caracteres'
                        }
                      })} required/>
                      </div>
                    </div>
                  </>)
                }
                
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Teléfono:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el telefono" name="lname" {...register("telefono")} defaultValue={empleado.telefono} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Calle:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa la calle" name="lname" {...register("calle")} defaultValue={empleado.calle} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Número:</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control" id="lname" placeholder="Ingresa el número" name="lname" {...register("numero")} defaultValue={empleado.numero} required/>
                  </div>
                </div>
                <div className="form-group form-cont">
                  <label className="control-label col-sm-6 label" for="comment">Municipio:</label>
                  <div className="col-sm-10">
                  <select className='form-control' {...register("municipio")}>
                    <option value="Monterrey" selected={empleado.municipio=="Monterrey"}>Monterrey</option>
                    <option value="San Nicolás" selected={empleado.municipio=="San Nicolás"}>San Nicolás</option>
                  </select>
                  </div>
                </div>
                <div className="form-group form-cont">        
                  <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">
                  {state!=undefined
                      ? "Modificar Usuario"
                      : "Crear Usuario"
                    }
                  </button>
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

