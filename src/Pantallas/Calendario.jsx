import React from 'react'
import styles from './Calendario.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';


import c1 from '../img/CursoGuadalajara.jpg'
import c2 from '../img/CursoSanLuis.jpg'
import c3 from '../img/CursoTampico.jpg'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const Calendario = () => {
    const classes = useStyles();
  return (
    <div className={styles.calendario}>
        <div className={styles.cont1}>
        <h1 className={styles.titulo}>¡Descubre nuestros cursos disponibles en diferentes partes de México!</h1>
        </div>
        <div className={styles.tarjetas}>
            <div className={styles.tarjeta1}>
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
          Curso globos y follaje
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Curso completo para prender todo sobre la decoración profesional con globos, flores y follaje. ¡Ven y aprende con nosotros lo último en tendencia! <br />
            Fecha: 03 y 04 Junio 2023 <br />
            Horario: 10:00 am a 6:00pm  <br />
            Lugar: Guadalajara
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <NavLink to="/Inscripción" smooth
                    duration={500} className={styles.callToAction}>Inscribirse</NavLink>
      </CardActions>
    </Card>
    </div>

    <div className={styles.tarjeta2}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Curso1"
          height="420"
          image={c2}
          title="Curso globos y follaje"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Curso globos y follaje
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Curso completo para prender todo sobre la decoración profesional con globos, flores y follaje. ¡Ven y aprende con nosotros lo último en tendencia! <br />
            Fecha: 13 y 14 Junio 2023 <br />
            Horario: 10:00 am a 6:00pm  <br />
            Lugar: San Luis
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <NavLink to="/Inscripción" smooth
                    duration={500} className={styles.callToAction}>Inscribirse</NavLink>
      </CardActions>
    </Card>
    </div>

    <div className={styles.tarjeta3}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Curso1"
          height="420"
          image={c3}
          title="Curso globos y follaje"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Curso globos y follaje
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Curso completo para prender todo sobre la decoración profesional con globos, flores y follaje. ¡Ven y aprende con nosotros lo último en tendencia! <br />
            Fecha: 17 y 18 Junio 2023 <br />
            Horario: 10:00 am a 6:00pm   <br />
            Lugar: Tampico
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <NavLink to="/Inscripción" smooth
                    duration={500} className={styles.callToAction}>Inscribirse</NavLink>
      </CardActions>
    </Card>
    </div>
    </div>
    </div>
  )
}

export default Calendario