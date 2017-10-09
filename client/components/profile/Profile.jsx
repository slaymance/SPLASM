import React from 'react';
import Edit from '../edit/Edit.jsx';
import $ from 'jquery';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // how is active user being bound?
  }

  addFriend() {
    var username = this.props.user.name
    $.ajax({
      url: `api/addfriend/${username}`,
      type: 'POST',
      success: (res) => {
        console.log('added friend');
        // set friend_status to 'Friends.'
        // refactor to 'friend request sent'
      },
      error: () => {
        // log error.
      }
    })
  }

  // isFriend() {
  //   var status = false;
  //   // check through current users friends list.
  //   // check if active user is in it.
  //   return status;
  // }

  render() {
    let coursesComplete = this.props.user.courses.reduce((tot, course) => {
      return course.usertocourse.status === '100%' ? tot + 1 : tot;
    }, 0);

    let editPic = '';
    let editGithub = '';
    let editInterests = '';
    if(this.props.isCurrentUser) {
      editPic = <div className="col-xs-3 col-xs-offset-1">
        <Edit field="picture">
          Add a picture here
        </Edit>
      </div>;

      editGithub = <Edit field="github">
        Add your GitHub username
      </Edit>

      editInterests = <Edit field="interests">
        What are your interests?
      </Edit>
    }

    return (<div style={{wordWrap: 'break-word'}} className="profile">
      {this.props.signedIn && !this.props.isCurrentUser &&
      (<button className="col-xs-10 col-xs-offset-1 addFriend" onClick={this.addFriend.bind(this)}>
        Add Friend
      </button>)
      }
      <div>
        {editPic}
        <img src={this.props.user.picture} className="col-sm-12 col-sm-offset-0 col-xs-10 col-xs-offset-1"/>
      </div>
      <div className="col-xs-12">
        <h3 className="text-center">{this.props.user.name}</h3>
        <div className="profileItem col-xs-12 text-center">
          <span className="col-xs-12">Member since:</span> {[this.props.user.createdAt.slice(5, 10), this.props.user.createdAt.slice(0, 4)].join('-')}
        </div>
        <div className="profileItem col-xs-12 text-center">
          <span className="col-xs-12">Courses complete:</span> {coursesComplete}
        </div>
        <div className="profileItem col-xs-12 text-center">
          <span className="col-xs-12">GitHub:</span> {this.props.user.github}
          {editGithub}
        </div>
        <div className="profileItem col-xs-12 text-center">
          <span className="col-xs-12">Interests:</span> {this.props.user.interests}
          {editInterests}
        </div>
      </div>
    </div>)
  }
}


export default Profile;
