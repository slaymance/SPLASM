import React from 'react';
import Profile from './profile/Profile.jsx';
import Courses from './courses/Courses.jsx';
import Social from './social/Social.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0">
        <div className="col-md-3">
          <Profile />
        </div>
        <div id="social" className="col-md-6">
          <Courses />
        </div>
        <div className="col-md-3">
          <Social />
        </div>
      </div>
    );
  }
}

export default App;
