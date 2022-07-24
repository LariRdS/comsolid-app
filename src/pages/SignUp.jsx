import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logotipoVerde from './comsolid-logo/TIPEV.png';

export default function SignUp() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const navigate = useNavigate();

  const numberMin = 6;

  const saveUser = ({ target }) => setUser(target.value);

  const saveEmail = ({ target }) => setEmail(target.value);

  const savePassword = ({ target }) => setPassword(target.value);

  const savePassword2 = ({ target }) => setPassword2(target.value);

  const handleClick = () => {
    navigate('/Login');
  };

  useEffect(() => {
    const regExUser = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    const checkUser = regExUser.test(user);

    const regExEmail = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;
    const checkEmail = regExEmail.test(email);

    const checkPassword = password.length > numberMin && password === password2;

    setIsDisabled(checkEmail === true && checkPassword === true && checkUser === true);
  }, [user, email, password, password2]);

  return (
    <>
      <img alt="logo-verde" src={logotipoVerde} />
      <h2>JUNTE-SE A NÓS</h2>
      <form>
        <label htmlFor="user">
          <input
            type="text"
            autoComplete="true"
            id="user"
            onChange={saveUser}
            placeholder="Nome completo"
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            autoComplete="true"
            id="email"
            onChange={saveEmail}
            placeholder="Email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            autoComplete="false"
            id="password"
            onChange={savePassword}
            placeholder="Senha"
          />
        </label>
        <label htmlFor="password2">
          <input
            type="password"
            autoComplete="false"
            id="password2"
            onChange={savePassword2}
            placeholder="confirme senha"
          />
        </label>
        <button
          type="submit"
          disabled={!isDisabled}
          onClick={handleClick}
        >
          Entrar
        </button>
      </form>
    </>
  );
}
