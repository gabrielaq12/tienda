import React from 'react';
import CartWidget from './CartWidget';


//import mi archivo css y logo
import './NavBar.css'; 
import logo4 from "../img/logo4.PNG"

const NavBar = () => {
  //la lógica va siempre antes del return

    return (
        <header className="header">
            {/* logo de la marca */}
            <div className="logo-container">
                <img src={logo4} alt="logo4"/>
            </div>

            {/* links de navegación */}
            <nav>
                <ul className="nav-container">
                <li>
                    <a href="/">home</a>
                </li>
                <li>
                    <a href="/">catalogo</a>
                </li>
                <li>
                    <a href="/">tiendita</a>
                </li>
                <li>
                    <a href="/">nostros</a>
                </li>
                <li>
                    <a href="/">contacto</a>
                </li>
                </ul>
            </nav>

            <CartWidget />
        </header>
    );
};

export default NavBar;
