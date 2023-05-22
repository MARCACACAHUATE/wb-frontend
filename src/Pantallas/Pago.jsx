import React, { useState, useEffect } from "react";
import imgEvento from "../img/eventoAro.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import styles from "./Calendario.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { formatCurrency } from "./../Hooks/currencyUtils";
import moment from "moment";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Button, Modal } from 'react-bootstrap';
import { reqqResapi } from "../api/reqRes";

const useStyles = makeStyles({
  root: {
    width: 645,
  },
});

const Pago = () => {
  const { register, handleSubmit } = useForm();
  const { state } = useLocation();
  const classes = useStyles();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  let evento = {};
  let separacion = {};

  const fechaformatSend = (fechaOriginal) => {
    const fechaFormateada = moment(fechaOriginal).format("DD-MM-YYYY");
    return fechaFormateada;
  };

  if (state != undefined) {
    evento = state.evento;
    separacion = state.separacion;
  }

  const onSubmit = (data) => {
    data.fecha = fechaformatSend(data.fecha);

    console.log(data);

    // navigate("/Eventos/Pago", {
    //   state: { evento: evento, separacion: data},
    // })
  };

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Compra de paquete de fiesta en WUJU Ballons con valor total de: $"+evento.costo_total,
            amount: {
              // currency_code: "MXN",
              value: Number(evento.costo_total),
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  const handleCloseModal = () => {
    // Cierra el modal
    setShowModal(false);
  };

  // check Approval
  const onApprove = async (data, actions) => {
    return await actions.order.capture().then(function (details) {
      const { payer } = details;
      console.log(payer);

      console.log(data.orderID);
      setOrderID(data.orderID)
      console.log(actions);
      setShowModal(true);

    savePedido();
    });
  };

  const savePedido = async () => {

    console.log(separacion);

    //llamado al api promesa y se le asigna la interfaz
    const resp = await reqqResapi.post("api/eventosseparacions/",separacion).then((res) => {
      if (res.data.error) {
        alert(res.data.message);
      } else {
        alert(res.data.message);
        navigate("/Eventos");
      }
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  const verificarCompra = async (Jsonsend) => {
    //llamado al api promesa y se le asigna la interfaz
    const resp =
      (await reqqResapi.post) <
      User >
      ("", Jsonsend).then((res) => {
        if (res.data.message) {
          alert(res.data.message);
        }
      });
  };

  const initialOptions = {
    "client-id":
      "ASPDmLQQH-Uod0VBYyp5n6dM_WWfnuF59F24M77ZzCV07LJMY37UsomtZFAYc5frw36EM2V8e8VkOTxH",
    currency: "MXN",
    intent: "capture",
  };

  return (
    <>
      <div className="personalizar">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)} className="row pago">
            <div className="col-md-7">
              
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Curso1"
                    height="420"
                    image={imgEvento}
                    title="Curso globos y follaje"
                  />
                  <CardContent>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <Typography gutterBottom variant="h5" component="h2">
                            Paquete: {evento.nombrePaquete}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            El evento ideal para tu "{evento.ocasion}". ¡Ven y
                            disfruta de nuestro servicio, vamos hasta tu{" "}
                            {evento.ocasion} vamos hasta tu {evento.mobiliario}!
                            <br />
                            <br />
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <Typography gutterBottom variant="h5" component="h2">
                            Comprador
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            <div className="row">
                              <div>
                                <p>
                                  <span className="recibo-label">Nombre:</span>{" "}
                                  {separacion.FirstName} {separacion.LastName}
                                </p>
                                <p>
                                  <span className="recibo-label">Email:</span>{" "}
                                  {separacion.email}
                                </p>
                                <p>
                                  <span className="recibo-label">
                                    Teléfono:
                                  </span>{" "}
                                  {separacion.telefono}
                                </p>
                                <p>
                                  <span className="recibo-label">
                                    Hora del Evento:
                                  </span>{" "}
                                  {separacion.horaEvento}
                                </p>
                                <p>
                                  <span className="recibo-label">Fecha:</span>{" "}
                                  {separacion.fecha}
                                </p>
                              </div>
                              <div>
                                <p>
                                  <span className="recibo-label">Calle:</span>{" "}
                                  {separacion.calle}
                                </p>
                                <p>
                                  <span className="recibo-label">Número:</span>{" "}
                                  {separacion.numero}
                                </p>
                                <p>
                                  <span className="recibo-label">Colonia:</span>{" "}
                                  {separacion.colonia}
                                </p>
                              </div>
                            </div>
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div
                        className="alert alert-success text-center"
                        role="alert"
                      >
                        <div className="d-flex justify-content-end">
                          <div className="text-right">
                            <p className="text-right">
                              Costo de envío:{" "}
                              <strong>
                                {formatCurrency(evento.costoEnvioMaterial)}
                              </strong>
                            </p>
                            <p className="text-right">
                              Costo de reservación:{" "}
                              <strong>
                                {formatCurrency(evento.costo_reservacion)}
                              </strong>
                            </p>
                            <p className="text-right">
                              <strong>
                                Costo total:{" "}
                                {formatCurrency(evento.costo_total)}
                              </strong>
                            </p>
                          </div>
                        </div>
                        <strong>
                          (Para aclaraciones contactarnos por nuestros correos o
                          redes sociales)
                        </strong>
                      </div>
                    </div>
                    <PayPalScriptProvider options={initialOptions}>
                      <PayPalButtons
                        style={{ layout: "horizontal" }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                      />
                    </PayPalScriptProvider>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </form>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Compra realiza con exito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>orderID del pedido:</strong> {orderID}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    
  );
};
export default Pago;
