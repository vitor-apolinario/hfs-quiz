// Importando o React
import React from "react";
import './footer.css';
import git from '../../images/git.png';

const Footer = () => (
  <div className="container">
    <div className="title">
      <text>Quiz desenvolvido no CCR de História da Fronteira Sul como material de apoio para o público infantil</text>
    </div>
    <div className="footer">
      <div className="dev">
        <text>Matheus Vinícius Todescato</text>
        <a href="https://github.com/mvtodescato" className="link">
          <img src={git} className="img" alt="Link para o GitHub do Matheus"></img>
        github.com/mvtodescato</a>      </div>
      <div className="dev">
        <text>Nicolas Kolling Ribas</text>
        <a href="https://github.com/nicolaskribas" className="link">
          <img src={git} className="img" alt="Link para o GitHub do Nicolas"></img>
        github.com/nicolaskribas</a>      </div>
      <div className="dev">
        <text>Vitor Antônio Apolinário</text>
        <a href="https://github.com/vitor-apolinario" className="link">
          <img src={git} className="img" alt="Link para o GitHub do Vitor"></img>
        github.com/vitor-apolinario</a>
      </div>
      <div className="dev">
        <text>Willian Bordignon Genero</text>
        <a href="https://github.com/WillianGenero" className="link">
          <img src={git} className="img" alt="Link para o GitHub do Willian"></img>
        github.com/WillianGenero</a>
      </div>
    </div>
  </div>
);

export default Footer;
