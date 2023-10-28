import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { NavLink } from 'react-router-dom';

export default class DetallesJugador extends Component {
  state = {
    jugador: {},
    status: false,
  }

  loadJugador() {
    const request = "api/Jugadores/" + this.props.idJugador;
    const url = Global.urlApi + request;
    axios.get(url).then(response => {
      this.setState({
        jugador: response.data,
        status: true,
      });
    });
  }

  componentDidMount() {
    this.loadJugador();
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h1 className="card-title">Detalles del Jugador</h1>
                {this.state.status && (
                  <div>
                    <h2>Nombre: {this.state.jugador.nombre}</h2>
                    <hr />
                    <p>Posición: {this.state.jugador.posicion}</p>
                    <hr />
                    <p>Fecha de Nacimiento: {this.state.jugador.fechaNacimiento}</p>
                    <hr />
                    <p>País: {this.state.jugador.pais}</p>
                    <hr /> {/* Línea horizontal */}
                    <div className="text-center">
                      <img src={this.state.jugador.imagen} alt={this.state.jugador.nombre} className="img-fluid" />
                    </div>
                  </div>
                )}
                <hr /> {/* Línea horizontal */}
                <div className="text-center">
                  <NavLink to={"/jugadores/" + this.props.idEquipo + "/" + this.props.nombreEquipo} className="btn btn-success">Volver</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
