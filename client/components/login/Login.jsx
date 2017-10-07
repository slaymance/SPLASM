import React from 'react';

const Login = () =>
  <form action="/action_page.php">
    <div className="imgcontainer">
      <img src="../../images/defaultProfPic.png" alt="Avatar" className="avatar"/>
    </div>

    <div className="container">
      <label><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required></input>

      <label><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required></input>

      <button type="submit">Login</button>
    </div>

    <div className="container">
      <button type="button" className="cancelbtn">Cancel</button>
      <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>;


// class Login extends React.Component {
//   constructor(props) {
//   	super(props);
//   }
//
//   render() {
//   	return (
//   		<div>
//   		  <h1>Welcome to Splasm!</h1>
//   		  <p>Sign in to view your profile.</p>
// 	  		<form action="/login" method="post">
// 	  		  <div>
// 	  		  	<label>Username:</label>
// 	  		  	<input type="text" name="username"/>
// 	  		  </div>
// 	  		  <div>
// 	  		    <label>Password:</label>
// 	  		    <input type="password" name="password"/>
// 	  		  </div>
// 	  		  <div>
// 	  		  	<input type="submit" value="Log In"/>
// 	  		  </div>
// 	  		</form>
// 	  		<h3>New user?</h3>
// 	  		<form action="/signup" method="get">
// 	  		  <div>
// 	  		    <input type="submit" value="Sign Up"/>
// 	  		  </div>
// 	  		</form>
//   		</div>
//   	);
//   }
// }

export default Login;
