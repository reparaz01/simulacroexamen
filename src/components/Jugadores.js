import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { NavLink } from 'react-router-dom';

export default class Jugadores extends Component {
  state = {
    jugadores: [],
    status: false,
  }

  loadJugadores() {
    const request = "api/Jugadores/JugadoresEquipos/" + this.props.idEquipo;
    const url = Global.urlApi + request;
    axios.get(url).then(response => {
      this.setState({
        jugadores: response.data,
        status: true,
      });
    });
  }

  componentDidMount() {
    this.loadJugadores();
  }

  render() {
    return (
      <div className="container py-4">
        <h2 className="mb-3">Jugadores: {this.props.nombreEquipo} &nbsp; 
          <NavLink to={"/equipo/" + this.props.idEquipo} className="btn btn-success">Volver</NavLink>
        </h2>
        {this.state.status && this.state.jugadores.length > 0 && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="align-middle text-center">Nombre</th>
                <th className="align-middle text-center">Foto</th>
                <th className="align-middle text-center">Detalles</th>
              </tr>
            </thead>
            <tbody>
              {this.state.jugadores.map(jugador => (
                <tr key={jugador.idJugador}>
                  <td className="align-middle text-center">{jugador.nombre}</td>
                  <td className="align-middle text-center">
                    <img src={jugador.imagen} alt={jugador.nombre} style={{ maxWidth: "100px" }} />
                  </td>
                  <td className="align-middle text-center">
                    <NavLink to={"/detallesjugador/" + jugador.idJugador + "/" + this.props.idEquipo + "/" + this.props.nombreEquipo} className="btn btn-primary">Detalles</NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
