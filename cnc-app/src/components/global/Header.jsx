import React from 'react';
import logocnc from '../../assets/images/transparentlogocnc.png';
import FeatherIcon from 'feather-icons-react';
import {   BrowserRouter as Router,   Switch,   Route,   Link } from "react-router-dom";


export const Header = () => {
    return (
        <header className="contenedor">
            <nav className="nav-menu">

                <img className="img-nav" src={logocnc} alt="Logo CNC" />

                <input type="checkbox" id="boton-menu" />
                <label for="boton-menu"><FeatherIcon icon="menu" /></label>
                <ul className="nav-items">
                    <li><Link to="/">Inicio</Link></li>
                    <li> <Link to="/Productos">Productos</Link></li>
                    <li><Link to="/Fechas">Fechas Especiales</Link>
                        <ul className="fechas">
                            <li><a href="#">San Valentin</a> </li>
                            <li><a href="#">Pascuas</a> </li>
                            <li><a href="#">Dia de la madre</a> </li>
                            <li><a href="#">Dia de los abuelos</a> </li>
                            <li><a href="#">Dia del padre</a> </li>
                            <li><a href="#">Dia del niño</a> </li>
                            <li><a href="#">Dia del maestro</a> </li>
                            <li><a href="#">Halloween</a> </li> 
                            <li><a href="#">Navidad</a> </li>
                        </ul>
                    </li>
                    <li><Link to="/Pedidos">Pedidos</Link></li>
                    <li><Link to="/Informacion">Informacion</Link></li>

                </ul>
                <div className="lado-derecho">
                    <div className="usuario">
                        <Link to="/Login"> <FeatherIcon icon="user" /> </Link>
                    </div>
                    <h1>|</h1>
                    <div className="carrito-general">
                        <Link to="/Carrito"> <FeatherIcon icon="shopping-cart" /> </Link>
                    </div>
                </div>
            </nav>



        </header>
    )
}

export default Header;
