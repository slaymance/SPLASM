import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/nodebook_icon_mono.png';

const Signup = () =>
  <div className="container login-container col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0">
    <div className="col-xs-12 col-xs-offset-0 col-sm-8 col-sm-offset-2">
      <div className="imgcontainer">
        <img src={icon} alt="Nodebook Logo" className="col-sm-10 col-sm-offset-1 col-xs-6 col-xs-offset-3"/>
      </div>
      <form className="login-form" action="/signup" method="post">
        <input className="username-input" type="text" name="username" placeholder="Username" required></input>

        <input className="password-input" type="password" name="password" placeholder="Password" required></input>

        <button className="loginbtn" type="submit">Signup</button>
      </form>

      <div>
        <Link to ="/">
          <button className="cancelbtn col-xs-12 text-center" type="button">Cancel</button>
        </Link>
        <span className="redir col-xs-12">Already a user?<br/><Link to="/login">Login »</Link></span>
      </div>
    </div>
  </div>;

export default Signup;
