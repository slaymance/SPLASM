import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/defaultProfPic.png';

const Login = () =>
  <div className="container login-container col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0">
    <div className="col-xs-12 col-xs-offset-0 col-sm-8 col-sm-offset-2">
      <div className="imgcontainer">
        <img src={icon} alt="Avatar" className="avatar col-sm-10 col-sm-offset-1 col-xs-6 col-xs-offset-3"/>
      </div>

      <form className="login-form" action="/login" method="post">
        <input className="username-input" type="text" placeholder="Username" name="username" required></input>

        <input className="password-input" type="password" name="password" placeholder="Password" required></input>

        <button className="loginbtn" type="submit">Login</button>
        <Link to="/">
          <button className="cancelbtn" type="button">Cancel</button>
        </Link>
      </form>

      <div>
        <span className="redir col-xs-12">New to nodebook?<br/><Link to="/signup">Sign up »</Link></span>
      </div>
    </div>
  </div>;

export default Login;
