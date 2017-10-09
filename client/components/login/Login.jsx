import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/defaultProfPic.png';

const Login = () =>
  <div className="container login-container col-xs-4 col-xs-offset-4">
    <div className="col-xs-6 col-xs-offset-3">
      <div className="imgcontainer">
        <img src={icon} alt="Avatar" className="avatar"/>
      </div>

      <form className="login-form" action="/login" method="post">
        <input className="username-input" type="text" placeholder="Username" name="username" required></input>

        <input className="password-input" type="password" name="password" placeholder="Password" required></input>

        <button className="loginbtn" type="submit">Login</button>
      </form>

      <div>
        <Link to ="/">
          <button className="cancelbtn" type="button">Cancel</button>
        </Link>
        <span className="redir">New to nodebook? <Link to="/signup">Sign up »</Link></span>
      </div>
    </div>
  </div>;

export default Login;
