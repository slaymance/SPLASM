import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class AppRoutes extends React.Component {
  constructor() {
    super();
    this.state = {
      usersList: []
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

  render() {
    return (<header className="col-xs-12">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/profile/users/username'>Profile</Link></li>
          <li>Logout</li>
        </ul>
        <div>
          <form>
            <input list="users" name="user"/>
            <datalist id="users">
              {this.state.usersList.map((username, index) => {
                <option key={index} value={username}/>
              })}
            </datalist>
          </form>
        </div>
      </nav>
    </header>)
  }

};

export default AppRoutes;
