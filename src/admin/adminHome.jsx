import React, { useEffect, useState } from "react";
import styles from "./../Pantallas/Calendario.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink,useNavigate } from "react-router-dom";
import { reqqResapi } from "../api/reqRes";
import { formatCurrency } from './../Hooks/currencyUtils';

import c1 from "../img/CursoGuadalajara.jpg";
import c2 from "../img/CursoSanLuis.jpg";
import c3 from "../img/CursoTampico.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const adminHome = () => {
  const navigate = useNavigate();

  const classes = useStyles();
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
              let nuevo = res.data.data.slice(res.data.data.length - 4);
              const arregloFiltrado = nuevo.filter((elemento) => elemento.separacion === null);

              setEventosList(arregloFiltrado);
        }

    });   
  }

  const modifyEvento = async (evento) => {
    // history.push('/Admin/adminFormEventos', { param: evento });
    navigate("/Admin/adminFormEventos", {
        state: { evento: evento },
      })
  };

  return (
    <div className={styles.calendario}>
      <div className={styles.cont1}>
        <h1 className={styles.titulo}>
          Eventos disponibles
        </h1>
      </div>
      <div className={styles.tarjetas}>
        
        {
          EventosList?.map(evento => (
            <div key={evento.id} className={styles.tarjeta1}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Curso1"
                  height="420"
                  image={c1}
                  title="Curso globos y follaje"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {evento.nombrePaquete}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    El evento ideal para tu "{evento.ocasion}". ¡Estamos listos para brindarte la mejor experiencia en tu evento!<br /><br />
                    Costo de envío: <strong>{formatCurrency(evento.costoEnvioMaterial)}</strong><br />
                    Costo de reservación: <strong>{formatCurrency(evento.costo_reservacion)}</strong><br />
                    Costo total: <strong>{formatCurrency(evento.costo_total)}</strong><br />
                    Estado: {evento.estado}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <div
                  className={styles.callToAction}
                  onClick={()=>modifyEvento(evento)}
                >
                  Ver evento
                </div>
              </CardActions>
            </Card>
            </div>
          ))                     
        }
      </div>
    </div>
  );
};
export default adminHome;
