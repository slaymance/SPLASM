import React from 'react';
import Profile from './profile/Profile.jsx';
import Courses from './courses/Courses.jsx';
import Social from './social/Social.jsx';
import $ from 'jQuery';

class App extends React.Component {
  constructor() {
    super();
  }

  fetchUser(username) {
    $.ajax({
      url:`./users?username=${username}`,
      type: 'GET',
      success: (res) => {
        console.log(res);
      },
      error: () => {
        console.log('error fetching user from database')
      }
    })
  }

  render() {
    return (
      <div className="container col-xs-12">
        <div className="col-sm-3 col-xs-12">
          <Profile />
        </div>
        <div id="social" className="col-sm-6 col-xs-12">
          <Courses />
        </div>
        <div className="col-sm-3 col-xs-12">
          <Social />
        </div>
      </div>
    );
  }
}

export default App;
