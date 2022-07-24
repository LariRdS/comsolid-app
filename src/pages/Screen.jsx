import React from 'react';
import { useNavigate } from 'react-router-dom';
import coins from './illustrations/coins.svg';
import logoLilas from './comsolid-logo/CONSOLIDLILÁS.png';

export default function Screen() {
  const navigate = useNavigate();
  return (
    <>
      <img alt="coins" src={coins} />
      <img alt="comsolid-logo" src={logoLilas} />
      <h3>Invista aquela graninha para o futuro</h3>
      <h3>Explore suas opções de forma clara</h3>
      <h3>Mantenha seus investimentos seguros</h3>
      <button
        type="button"
        onClick={() => navigate('/login')}
      >

        Entrar
      </button>
      <button
        type="button"
        onClick={() => navigate('/signup')}
      >
        Cadastrar
      </button>
    </>
  );
}
