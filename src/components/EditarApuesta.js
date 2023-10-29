import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default class EditarApuesta extends Component {
    cajaUsuario = React.createRef();
    cajaResultado = React.createRef();
    cajaFecha = React.createRef();

    state = {
        status: false,
        usuario: "",
        resultado: "",
        fecha: "",
        idApuesta: this.props.idApuesta,
        apuestas : [],
        apuesta : {}

    };

    editApuesta = (e) => {
        e.preventDefault();
        const usuario = this.cajaUsuario.current.value;
        const resultado = this.cajaResultado.current.value;
        const fecha = this.cajaFecha.current.value;

        const url = Global.urlApi + 'api/apuestas';

        const apuesta = {
            usuario: usuario,
            resultado: resultado,
            fecha: fecha,
            apuesta : {}
        };

        axios.put(url, apuesta).then((response) => {
                this.setState({
                    status: true,
                });
            });
    }


    loadApuesta = (idApuesta) => {
        const request = "api/apuestas";
        const url = Global.urlApi + request;
    
        axios.get(url)
          .then(response => {
            this.setState({
              apuestas: response.data,
            });
    
            for (let i = 0; i < this.state.apuestas.length; i++) {
              if (this.state.apuestas[i].idApuesta == idApuesta) {
                this.setState({
                    apuesta: this.state.apuestas[i]
                  });
                break; 
              }
            }
          })

          

    }
    

      componentDidMount(){
        this.loadApuesta(this.state.idApuesta);
      }


    render() {

        const customButtonStyle = {
            '--bs-btn-padding-x': '5rem', // Ajusta el ancho horizontal
            '--bs-btn-font-size': '1rem', // Ajusta el tamaño de fuente
          };

        if (this.state.status === true) {
            return (
                <Navigate to="/apuestas" alert="Apuesta realizada correctamente" />
            );
        } else {
            return (
                <div className="container py-4">
                    <h1 className="text-center fw-bold mb-4">Realizar Apuesta</h1>
                    <div className="mb-3">
                        <label htmlFor="usuario" className="form-label">Usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            id="usuario"
                            ref={this.cajaUsuario}
                            value={this.state.apuesta.usuario || ''}
                            onChange={(e) => {
                                this.setState({
                                  apuesta: {
                                    ...this.state.apuesta,
                                    usuario: e.target.value,
                                  },
                                });
                              }}

                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="resultado" className="form-label">Resultado</label>
                        <input
                            type="text"
                            className="form-control"
                            id="resultado"
                            ref={this.cajaResultado}
                            value={this.state.apuesta.resultado || ''}
                            onChange={(e) => {
                                this.setState({
                                  apuesta: {
                                    ...this.state.apuesta,
                                    resultado: e.target.value,
                                  },
                                });
                              }}

                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fecha" className="form-label">Fecha</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fecha"
                            ref={this.cajaFecha}
                            value={this.state.apuesta.fecha || ''}
                            onChange={(e) => {
                                this.setState({
                                  apuesta: {
                                    ...this.state.apuesta,
                                    fecha: e.target.value,
                                  },
                                });
                              }}

                        />
                    </div>
                    <div className="text-center">
                        <br></br>
                        <button onClick={this.editApuesta} className="btn btn-warning btn-lg" style={customButtonStyle} alert="Apuesta realizada correctamente">
                            Editar Apuesta
                        </button> &nbsp;
                        <NavLink to={"/apuestas"} className="btn btn-secondary">Volver</NavLink>

                    </div>
                </div>
            );
        }
    }
}
