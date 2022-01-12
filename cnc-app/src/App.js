import logo from './logo.svg';
import './App.css';
import './assets/style.css';
import React from "react"; 
import {   BrowserRouter as Router,   Switch,   Route,   Link } from "react-router-dom";

import { Header } from './components/global/Header';
import { PrincipalPost } from './components/PrincipalPost';
import { MiniPosts } from './components/MiniPosts'
import { Banner } from './components/Banner';
import { Suscription } from './components/Suscription';
import { Footer } from './components/global/Footer';
import Fechas from './components/pages/Fechas';
import Productos from './components/pages/Productos';
import Pedidos from './components/pages/Pedidos';
import Informacion from './components/pages/Informacion';
import Carrito from './components/pages/Carrito';




function App() {
  return (
    <>
    <Router>
    <Header/>
    <Switch>
      <Route path exact="/">
        <PrincipalPost/>
        <MiniPosts/>
        <Banner/>
        <Suscription/>
        
      </Route>
      <Route path="/Productos">
        <Productos/>
      </Route>
      <Route path="/Fechas">
        <Fechas/>
      </Route>
      <Route path="/Pedidos">
        <Pedidos/>
      </Route>
      <Route path="/Informacion">
        <Informacion/>
      </Route>
      <Route path="/Carrito"><Carrito/>
      </Route>
    </Switch>
    </Router>
      


      <Footer/>
    </>
  )
}

export default App;
