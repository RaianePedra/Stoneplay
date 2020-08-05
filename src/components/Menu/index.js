import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/img/LOGO.png';
import './Menu.css';
<<<<<<< HEAD
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="LOGO" src={LOGO} alt="AluraFlix LOGO" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
=======
import Button from '../Button'

//import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className ='Menu'>
      <Link to= '/'>
        <img className = 'Logo' src = {LOGO} alt = 'Stoneflix logo'/>   
      </Link>
            
      <Button as= {Link} className='ButtonLink' to='/cadastro/video'>
        Novo Video
>>>>>>> 427b58d1f670444d0f77ce60471c26bcc29206cb
      </Button>
    </nav>
  );
}

<<<<<<< HEAD
export default Menu;
=======
export default Menu;  
>>>>>>> 427b58d1f670444d0f77ce60471c26bcc29206cb
