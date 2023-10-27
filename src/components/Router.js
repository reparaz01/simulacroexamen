import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuRutas from './MenuRutas';
import Home from './Home';
import { useParams } from 'react-router-dom';

export default class Router extends Component {
  render() {

    return (
      <BrowserRouter>
        <h1> MENU EN ROUTER</h1>
        <MenuRutas />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}