// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import logo from '../../images/01.png';

const nav = {
    display: 'flex',
    backgroundColor: '#e5e5e5',
    justifyContent: 'space-around'
}

const image = {
    maxHeight: '130px',
    width: 'auto'
}

const Header = () => (
    <nav style={nav}>
        <img src={logo} style={image} alt="logo universidade federal da fronteira sul"/>
    </nav>
);

export default Header;
 