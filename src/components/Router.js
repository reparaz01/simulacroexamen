import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuRutas from './MenuRutas';
import Home from './Home';
import Equipo from './Equipo';
import Jugadores from './Jugadores';
import DetallesJugador from './DetallesJugador';
import Apuestas from './Apuestas';
import RealizarApuesta from './RealizarApuesta';
import EditarApuesta from './EditarApuesta';
import { useParams } from 'react-router-dom';

export default class Router extends Component {
  render() {

    function EquipoElement(){
      var {idEquipo} = useParams();
      return<Equipo idEquipo = {idEquipo}/>
    }

    function JugadoresElement(){
      var {idEquipo , nombreEquipo} = useParams();
      return<Jugadores idEquipo = {idEquipo} nombreEquipo = {nombreEquipo}/>
    }

    function DetallesJugadorElement(){
      var {idJugador, idEquipo, nombreEquipo} = useParams();
      return<DetallesJugador idJugador = {idJugador} idEquipo = {idEquipo} nombreEquipo = {nombreEquipo}/>
    }

    function EditarApuestaElement(){
      var {idApuesta} = useParams();
      return<EditarApuesta idApuesta = {idApuesta} />
    }



    return (
      <BrowserRouter>
        <MenuRutas />
        <Routes>
          <Route path="/editarapuesta/:idApuesta" element={<EditarApuestaElement />} />
          <Route path="/realizarapuesta" element={<RealizarApuesta />} />
          <Route path="/" element={<Home />} />
          <Route path="/apuestas" element={<Apuestas />} />
          <Route path="/detallesjugador/:idJugador/:idEquipo/:nombreEquipo" element={<DetallesJugadorElement />} />
          <Route path="/jugadores/:idEquipo/:nombreEquipo" element={<JugadoresElement />} />
          <Route path="/equipo/:idEquipo" element={<EquipoElement />} />
        </Routes>
      </BrowserRouter>
    );
  }
}