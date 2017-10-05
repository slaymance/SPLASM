import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class AppRoutes extends React.Component {
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
      type: 'GET',
      success: (res) => {
        console.log('You are now logged out.');
      },
      error: (err) => {
        console.log('Logout unsuccessful.');
        console.error(err);
      }
    });
  }

  render() {
    return (<header className="col-xs-12">
      <nav>
        <ul>
          <li><Link to='/' replace>Home</Link></li>
          <li><Link to={'/profile/users/' + this.props.user} replace>Profile</Link></li>
          <li><button onClick={this.logout}>Logout</button></li>
          <li>
            <input list="users" name="user" value={this.state.userVal} onChange={this.changeUserVal.bind(this)}/>
            <datalist id="users">
              {this.state.usersList.map((username, index) => {
                return (<option key={index} value={username}/>);
              })}
            </datalist>
          </li>
          <li>
            <Link replace to={'/search/users/' + this.state.userVal}><button>Search</button></Link>
          </li>
        </ul>
      </nav>
    </header>)
  }

};

export default AppRoutes;
