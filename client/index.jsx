import AppRoutes from './components/AppRoutes.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/style.css';
import Signup from './components/signup/Signup.jsx';
import Login from './components/login/Login.jsx';


ReactDOM.render((
  <BrowserRouter>
    <AppRoutes/>
  </BrowserRouter>
), document.getElementById('root'));
