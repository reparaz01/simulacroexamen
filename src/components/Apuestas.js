import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { NavLink } from 'react-router-dom';

export default class Apuestas extends Component {
  state = {
    apuestas: [],
    status: false,
  }

  loadApuestas() {
    const request = "api/apuestas";
    const url = Global.urlApi + request;

    axios.get(url)
      .then(response => {
        this.setState({
          apuestas: response.data,
          status: true
        });
      });
  }

  componentDidMount() {
    this.loadApuestas();
  }

  render() {
    const customButtonStyle = {
      '--bs-btn-padding-x': '5rem', // Ajusta el ancho horizontal
      '--bs-btn-font-size': '1rem', // Ajusta el tamaño de fuente
    };
    return (

      <div className="container py-4">

        <h1 className="text-center fw-bold mb-4">Local: Real Madrid CF | Visitante: FC Barcelona</h1>
        <div className="d-flex justify-content-center">
          <NavLink to="/realizarapuesta" className="btn btn-primary btn-lg btn-block m-4" style={customButtonStyle}>Realizar Apuesta</NavLink>
        </div>
        {this.state.status && this.state.apuestas.length > 0 && (
          <table className="table table-secondary table-bordered">
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Resultado</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {this.state.apuestas.map(apuesta => (
                <tr key={apuesta.idApuesta}>
                  <td>{apuesta.usuario}</td>
                  <td>{apuesta.resultado}</td>
                  <td>{apuesta.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
