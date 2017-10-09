import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/nodebook_icon_mono.png';

const Signup = () =>
  <div className="container login-container col-xs-4 col-xs-offset-4">
    <div className="col-xs-6 col-xs-offset-3">
      <div className="imgcontainer">
        <img src={icon} alt="Avatar" className="signup-avatar"/>
      </div>
      <form className="login-form" action="/signup" method="post">
        <input className="username-input" type="text" name="username" placeholder="Username" required></input>

        <input className="password-input" type="password" name="password" placeholder="Password" required></input>

        <button className="loginbtn" type="submit">Signup</button>
      </form>

      <div>
        <Link to ="/">
          <button className="cancelbtn" type="button">Cancel</button>
        </Link>
        <span className="redir">Already a user? <Link to="/login">Login »</Link></span>
      </div>
    </div>
  </div>;

export default Signup;
