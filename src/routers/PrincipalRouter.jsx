import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Inicio from '../components/HomeView/HomeView';
import Error from '../components/Error/Error';

const PrincipalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/home" element={<Inicio/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default PrincipalRouter
