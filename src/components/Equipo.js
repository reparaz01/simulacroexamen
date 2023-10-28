import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { NavLink } from 'react-router-dom';

export default class Equipo extends Component {
  state = {
    equipo: null, // Inicializa equipo como nulo
    equipoCargado: false,
  }

  loadEquipo() {
    const url = Global.urlApi + "api/equipos/" + this.props.idEquipo;

    axios.get(url)
      .then(response => {
        this.setState({
          equipo: response.data,
          equipoCargado: true
        });
      });
  }

  componentDidMount() {
    this.loadEquipo();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.idEquipo !== this.props.idEquipo) {
      this.loadEquipo();
    }
  }

  render() {
    if (!this.state.equipo) {
      return <div>Cargando...</div>;
    }

    return (
      <div>
      <h1 className="text fw-bold mb-4"> Equipo: {this.state.equipo.nombre}</h1>
        
        <table className="table">
          <tbody>
            <tr>
              <th>Nombre</th>
              <td>{this.state.equipo.nombre}</td>
            </tr>
            <tr>
              <th>Champions</th>
              <td>{this.state.equipo.champions}</td>
            </tr>
            <tr>
              <th>Web</th>
              <td>
                <a href={this.state.equipo.web} target="_blank" rel="noopener noreferrer">
                  {this.state.equipo.web}
                </a>
              </td>
            </tr>
            <tr>
              <th>Descripción</th>
              <td>{this.state.equipo.descripcion}</td>
            </tr>
          </tbody>
        </table>
        
        <hr /> 
        
        <div className="text-center">
          <img
            src={this.state.equipo.imagen}
            alt={this.state.equipo.nombre}
            style={{ maxWidth: "300px" }}
          />
        </div>
        
        <hr /> 
        
        <div className="container">
          <div className="row">
            <div className="text-center">
            <NavLink to={"/jugadores/" + this.state.equipo.idEquipo + "/" + this.state.equipo.nombre} className="btn btn-primary">Ver Jugadores</NavLink> &nbsp; &nbsp;
            <NavLink to="/" className="btn btn-secondary">Volver</NavLink> 
            </div>
          </div>
        </div>
      </div>
    );
  }

  verJugadores = () => {
    // Lógica para mostrar la lista de jugadores
  }

  volver = () => {
    // Lógica para volver a la página anterior
  }
}
