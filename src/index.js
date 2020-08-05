import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
<<<<<<< HEAD
import CadastroCategoria from './pages/cadastro/Categoria';
import Error from './pages/Error'

// Desafio master blaster na descrição
=======
import CadastroCategoria from './pages/cadastro/categoria';

// Desafio master blaster na descrição
const Pagina404 = () => (<div>Página 404</div>)
>>>>>>> 427b58d1f670444d0f77ce60471c26bcc29206cb

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
<<<<<<< HEAD
      <Route component={Error} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
=======
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
>>>>>>> 427b58d1f670444d0f77ce60471c26bcc29206cb
