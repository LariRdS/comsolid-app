import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setLocalStorage } from '../assets/functions';
import logoVerde from './comsolid-logo/logoverde.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setLocalStorage('user', { email });
    navigate('/home');
  };

  useEffect(() => {
    const regEx = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;
    const checkEmail = regEx.test(email);
    const numberMin = 6;
    const checkPassword = password.length > numberMin;
    setValid(checkEmail === true && checkPassword === true);
  }, [email, password]);

  return (
    <div>
      <img alt="comsolid-logo" src={logoVerde} />
      <h1>Bem Vindo!</h1>
      <form>
        <label htmlFor="email">
          <input
            type="email"
            autoComplete="true"
            id="email"
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Email"
          />
        </label>
        <label htmlFor="senha">
          <input
            type="password"
            autoComplete="false"
            id="senha"
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Senha"
          />
        </label>
        <button
          type="submit"
          disabled={!valid}
          onClick={handleClick}
        >
          Entrar
        </button>
      </form>
      <a href="./ForgotPassword">Esqueci minha senha</a>
      <a href="./SignUp ">Cadastrar</a>
    </div>
  );
}
