import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Inicio from '../components/HomeView/HomeView';
import Error from '../components/Error/Error';
import NavBar from '../components/NavBar/NavBar';
import Shop from '../components/Shop/Shop';

const PrincipalRouter = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/home" element={<Inicio/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default PrincipalRouter
