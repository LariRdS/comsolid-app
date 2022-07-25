import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoLilas from './comsolid-logo/CONSOLIDLILÁS.png';
import '../style/screen.css';

export default function Screen() {
  const navigate = useNavigate();
  return (
    <div className="splashscreen">
      <div className="imagescreen">
        <img alt="comsolid-logo" src={logoLilas} className="app-logo" />
      </div>
      <section className="textscreen">
        <h3 className="text1">Invista aquela graninha para o futuro</h3>
        <h3 className="text2">Explore suas opções de forma clara</h3>
        <h3 className="text3">Mantenha seus investimentos seguros</h3>
      </section>
      <section className="btnscreen">
        <button
          type="button"
          className="screen-btn"
          onClick={() => navigate('/login')}
        >
          Entrar
        </button>
        <button
          type="button"
          className="screen-btn"
          onClick={() => navigate('/signup')}
        >
          Cadastrar
        </button>
      </section>
    </div>
  );
}
