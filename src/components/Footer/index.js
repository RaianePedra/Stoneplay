import React from 'react';
import { FooterBase } from './styles';
import LOGO from '../../assets/img/LOGO.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={LOGO} alt="Logo Stoneplay" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
