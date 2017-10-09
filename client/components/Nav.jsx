import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import icon from '../images/nodebook_small_white.png';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      userVal: '',
      found: false,
      editable: false
    };
  }

  componentDidMount() {
    $.ajax({
      url: './api/users',
      type: 'GET',
      success: (res) => {
        this.setState({
          usersList: JSON.parse(res).map(obj => (obj.name))
        });
      },
      error: () => {
        console.log('error fetching users from database');
      }
    });
  }

  changeUserVal(event) {
    this.setState({
      userVal: event.target.value
    });
  }

  logout() {
    $.ajax({
      url: '/logout',
      success: res => {
        console.log('You are now logged out.');
        window.location.reload();
      },
      error: err => console.error(err)
    });
  }

  render() {
    return (<header>
      <nav className="navbar navbar-default main-nav">
        <div className="container-fluid navbar-header">
          <img src={icon}/>
          <a href="/" className="navbar-brand">nodebook</a>
          <ul className="nav navbar-nav action-list">
            <li className="container col-xs-2">
              <div className="input-group stylish-input-group">
                <span className="input-group-addon">
                  <Link replace to={'/search/users/' + this.state.userVal}>
                    <button type="submit">
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </Link>
                </span>
                <input list="users" name="user" value={this.state.userVal} onChange={this.changeUserVal.bind(this)} type="text" className="form-control" placeholder="Traverse profiles"/>
              </div>
            </li>
            { !this.props.user
              ? <div className="nav navbar-nav navbar-right action-list inline-list">
                <li className="action">
                  <Link to="/signup">
                    <span className="glyphicon glyphicon-user"></span> Sign Up
                  </Link>
                </li>
                <li className="action">
                  <Link to="/login">
                    <span className="glyphicon glyphicon-log-in"></span> Login
                  </Link>
                </li>
              </div>
              : <div className="nav navbar-nav navbar-right action-list inline-list">
                <li>
                  <Link to={'/profile/users/' + this.props.user}>
                    <span className="glyphicon glyphicon-tree-deciduous"></span>  Profile
                  </Link></li>
                <li>
                  <Link to="" onClick={this.logout}>
                    <span className="glyphicon glyphicon-log-out"></span> Logout
                  </Link>
                </li>
              </div>
            }
          </ul>
        </div>
      </nav>
      <datalist id="users">
        {this.state.usersList.map((username, index) => {
          return (<option key={index} value={username}/>);
        })}
      </datalist>
    </header>);
  }
}

export default Nav;
