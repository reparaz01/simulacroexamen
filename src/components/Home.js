import React, { Component } from 'react';
import fotohome from '../assets/images/fotohome.jpg'; // Asegúrate de que la ruta de la imagen sea correcta

export default class Home extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1 className="mb-3">EQUIPOS DEL PARTIDO DEL SÁBADO</h1>
        <h2 className="mb-3">Selecciona el equipo desde "Equipos"</h2>
        <hr />

        <div className="d-flex justify-content-center">
          <img src={fotohome} alt="Logo" className="img-fluid" />
        </div>
      </div>
    );
  }
}
