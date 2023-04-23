import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Inicio from '../components/HomeView/HomeView';
import Error from '../components/Error/Error';
import NavBar from '../components/NavBar/NavBar';
import Shop from '../components/Shop/Shop';
import DetailedProd from '../components/DetailedProd/DetailedProd';
import Cart from '../components/Cart/Cart';

const PrincipalRouter = () => {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/home" element={<Inicio/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/products/:id" element={<DetailedProd />}></Route>
          <Route path="/products/category/:categoryId" element={<Shop />}></Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default PrincipalRouter
