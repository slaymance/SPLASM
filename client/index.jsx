import App from './components/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import Signup from './components/signup/Signup.jsx';
import Login from './components/login/Login.jsx';

// start by making a get request
// check if user has session
// if yes, render App
// if no, render signup

console.log(window.location.pathname)

if(window.location.pathname === '/login') {
  ReactDOM.render(<Login/>, document.getElementById('root'));
} else if (window.location.pathname === '/signup') {
	ReactDOM.render(<Signup/>, document.getElementById('root'));
} else {
  ReactDOM.render(<App/>, document.getElementById('root'));
}
