import React, { Component } from 'react';
import fotohome from '../assets/images/fotohome.jpg'; 

export default class Home extends Component {
  render() {
    return (
      <div>
        <img src={fotohome} alt="Imagen de fondo" style={{ width: '100%', height: '100vh', objectFit: 'cover'}}
        />
      </div>
    );
  }
}
