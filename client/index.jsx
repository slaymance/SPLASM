import App from './components/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';

// start by making a get request
// check if user has session
// if yes, render App
// if no, render signup

console.log(window.location.pathname)

if(window.location.pathname === '/login') {
  //ReactDOM.render(<Login/>, document, getElementById('root'));
} else {
  ReactDOM.render(<App/>, document.getElementById('root'));
}
