import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () =>
  <div className="container login-container col-xs-4 col-xs-offset-4">
    <div className="col-xs-6 col-xs-offset-3">
      <form className="login-form" action="/action_page.php">
        <div className="imgcontainer">
          <img src="../../images/defaultProfPic.png" alt="Avatar" className="avatar"/>
        </div>

        <div>
          <input className="username-input" type="text" placeholder="Username" required></input>

          <input className="password-input" type="password" placeholder="Password" required></input>

          <button className="loginbtn" type="submit">Signup</button>
        </div>

        <div>
          <Link to ="/">
            <button className="cancelbtn" type="button">Cancel</button>
          </Link>
          <span className="redir">Already a user? <Link to="/login">Login »</Link></span>
        </div>
      </form>
    </div>
  </div>;

export default Signup;
