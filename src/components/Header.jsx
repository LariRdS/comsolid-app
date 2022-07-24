import React from 'react';
import white from '../pages/comsolid-logo/white.png';
import tracciatoHeader from '../pages/illustrations/tracciatoHeader.svg';

export default function Header() {
  return (
    <>
      <img alt="tracciato" src={tracciatoHeader} />
      <img alt="logo-branca" src={white} />
    </>
  );
}
