import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import context from '../context/context';
import { setLocalStorage } from '../assets/functions';
import loginService from '../services/login.service';
import logoVerde from './comsolid-logo/logoverde.png';

export default function Login() {
  const { setUser, setAuth } = useContext(context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const login = await loginService.login(email, password);
      if (login) {
        setUser(email);
        setLocalStorage('token', { email });
        setAuth(true);
        navigate('/auth/home');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuário ou senha incorretos!',
      });
      throw new Error('Usuário ou senha incorretos');
    }
  };

  useEffect(() => {
    const regEx = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;
    const checkEmail = regEx.test(email);
    const numberMin = 6;
    const checkPassword = password.length >= numberMin;
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
