import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default class RealizarApuesta extends Component {
    cajaUsuario = React.createRef();
    cajaResultado = React.createRef();
    cajaFecha = React.createRef();

    state = {
        status: false,
    };

    insertApuesta = () => {
        const usuario = this.cajaUsuario.current.value;
        const resultado = this.cajaResultado.current.value;
        const fecha = this.cajaFecha.current.value;

        const url = Global.urlApi + 'api/apuestas';

        const apuesta = {
            usuario: usuario,
            resultado: resultado,
            fecha: fecha,
        };

        axios.post(url, apuesta)
            .then((response) => {
                this.setState({
                    status: true,
                });
            });
    };

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
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="resultado" className="form-label">Resultado</label>
                        <input
                            type="text"
                            className="form-control"
                            id="resultado"
                            ref={this.cajaResultado}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fecha" className="form-label">Fecha</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fecha"
                            ref={this.cajaFecha}
                        />
                    </div>
                    <div className="text-center">
                        <br></br>
                        <button onClick={this.insertApuesta} className="btn btn-primary btn-lg" style={customButtonStyle} alert="Apuesta realizada correctamente">
                            Realizar Apuesta
                        </button> &nbsp;
                        <NavLink to={"/apuestas"} className="btn btn-secondary">Volver</NavLink>

                    </div>
                </div>
            );
        }
    }
}
