import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import groupEmails from './illustrations/groupEmails.svg';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    Swal.fire(
      'Feito!',
      'Instruções foram enviadas para o endereço de email cadastrado!',
      'success',
    );
  };

  useEffect(() => {
    const regEx = /^[\w.-]+@[\w.-]+\.[\w]+(\.[\w]+)?$/i;
    const checkEmail = regEx.test(email);
    setValid(checkEmail === true);
  }, [email]);

  return (
    <>
      <img alt="emails" src={groupEmails} />
      <p>Um email com instruções será enviado para seu endereço cadastrado</p>
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
        <button
          type="submit"
          disabled={!valid}
          onClick={handleClick}
        >
          Enviar
        </button>
      </form>
      <p>Aguarde 30 segundos em caso de reenvio</p>
    </>
  );
}
