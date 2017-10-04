import AppRoutes from './components/AppRoutes.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/style.css';

if(window.location.pathname === '/login') {
  //ReactDOM.render(<Login/>, document, getElementById('root'));
} else {
  ReactDOM.render((
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    ), document.getElementById('root'));
}
