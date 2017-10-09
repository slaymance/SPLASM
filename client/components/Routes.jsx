import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App.jsx';
import Signup from './signup/Signup.jsx';
import Login from './login/Login.jsx';
import Splash from './Splash.jsx';
import NotFound from './NotFound.jsx';


const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={Splash}/>
    <Route path='/profile/users/:username' render={(reactProps) => <App {...reactProps} signedIn={props.signedIn}/>}/>
    <Route path='/search/users/:username' render={(reactProps) => <App {...reactProps} signedIn={props.signedIn}/>}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/login' component={Login}/>
    <Route path='*' component={NotFound}/>
  </Switch>
);

export default Routes;
