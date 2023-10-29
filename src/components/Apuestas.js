import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { NavLink } from 'react-router-dom';

export default class Apuestas extends Component {
  state = {
    apuestas: [],
    statusLoad: false,
    statusDelete: false,
  }

  loadApuestas() {
    const request = "api/apuestas";
    const url = Global.urlApi + request;

    axios.get(url)
      .then(response => {
        this.setState({
          apuestas: response.data,
          statusLoad: true
        });
      });
  }

  eliminarApuesta(idApuesta) {
    const request = "api/apuestas/" + idApuesta ;
    const url = Global.urlApi + request;
    console.log("ELIMINANDO...." + url);
    axios.delete(url)
      .then(response => {
        this.setState({
          statusDelete: true
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
        {this.state.statusLoad && (
          <table className="table table-secondary table-bordered">
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Resultado</th>
                <th>Fecha</th>
                <th>Editar</th>
                <th>Eliminar</th>

              </tr>
            </thead>
            <tbody>
              {this.state.apuestas.map(apuesta => (
                <tr key={apuesta.idApuesta}>
                  <td>{apuesta.usuario}</td>
                  <td>{apuesta.resultado}</td>
                  <td>{apuesta.fecha}</td>
                  <td> <NavLink className="btn btn-warning" to={"/editarapuesta/" + apuesta.idApuesta}>Modificar </NavLink> </td>
                  <td> <button className="btn btn-danger" onClick={() => this.eliminarApuesta(apuesta.idApuesta)}>Eliminar </button> </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
