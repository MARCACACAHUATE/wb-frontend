import React from "react";
import { useNavigate } from "react-router-dom";
import { reqqResapi } from "../api/reqRes";
import moment from 'moment';

const EventosSeparacionesRow = ({separacion}) => {

  const navigate = useNavigate();

  // const [EventosList, setEventosList] = useState([]);

  // useEffect(() => {
  //   getEventosList();
  // }, []);

  // const getEventosList = async() => {

  //   const res = await reqqResapi.get('api/eventos').then(res => {

  //       if (res.data.error) {
  //             console.log(res.data.error);
  //       } else {
  //             console.log(res.data.data);
  //             setEventosList(res.data.data);
  //       }

  //   });   
  // }

  const deleteEvento = async (id) => {

    if (confirm("¿Está seguro de que desea eliminar este elemento?")) {
        //llamado al api promesa y se le asigna la interfaz
        const resp = await reqqResapi.delete("api/eventosseparacions/"+id).then((res) => {
            if (res.data.error) {
            alert(res.data.message);
            } else {
            alert(res.data.message);
            // se actualiza la tabla
            window.location.reload();
            }
        });
    }
    
  };

  const modifyEvento = async (separacion) => {
    // history.push('/Admin/adminFormEventos', { param: evento });
    console.log(separacion);
    navigate("/Admin/adminFormEventosSeparaciones", {
        state: { separacion: separacion },
      })
  };

  const fechaformat =(fechaOriginal) =>{
    const fechaFormateada = moment(fechaOriginal).format('YYYY/MM/DD');
    return fechaFormateada
  }

  return (
    <tr>
    <td className="rowactions">
        <button onClick={()=>modifyEvento(separacion)} type="button" className="btn btn-info">
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
        </button>
        <button onClick={()=>deleteEvento(separacion.id)} type="button" className="btn btn-danger" disabled={sessionStorage.getItem('role')!="Admin"}>
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
    <td className="adminrow">{fechaformat(separacion.fecha)}</td>
    <td className="adminrow">{separacion.horaEvento}</td>
    <td className="adminrow">{separacion.nombrePaquete}</td>
    <td className="adminrow">{separacion.firstName+" "+separacion.lastName}</td>
    <td className="adminrow">{separacion.telefono}</td>
    <td className="adminrow">{separacion.email}</td>
    <td className="adminrow">{separacion.colonia+" "+separacion.calle+"  #"+separacion.numero}</td>

    </tr>
  );
};
export default EventosSeparacionesRow;
