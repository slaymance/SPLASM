import React from 'react';
import Nav from './Nav.jsx';
import Routes from './Routes.jsx';
import $ from 'jquery';

class AppRoutes extends React.Component {
  constructor() {
    super();
    this.state = {
      user: ''
    };
  }

  componentDidMount() {
    $.ajax({
      url:'./api/userdata',
      type: 'GET',
      success: (res) => {
        this.setState({
          user: res
        });
      },
      error: () => {
        console.log('error fetching user data');
      }
    });
  }

  render() {
    return (
      <div>
        <Nav user={this.state.user}/>
        <Routes signedIn={this.state.user}/>
      </div>
    )
  }
};

export default AppRoutes;
