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
      return course.status === '100%' ? tot + 1 : tot;
    }, 0);

    let editPic = '';
    let editGithub = '';
    let editInterests = '';
    if(this.props.edit) {
      editPic = <Edit field="picture">
        Add a picture here
      </Edit>;

      editGithub = <Edit field="github">
        Add your GitHub username
      </Edit>

      editInterests = <Edit field="interests">
        What are your interests?
      </Edit>
    }

    return (<div style={{wordWrap: 'break-word'}}>
      <div>
        <img src={this.props.user.picture} className="col-sm-12 col-sm-offset-0 col-xs-10 col-xs-offset-1"/>
        {editPic}
      </div>
      <div className="col-xs-12">
        <h3>{this.props.user.name}</h3>
        <div className="profileItem">
          Member since: {[this.props.user.createdAt.slice(5, 10), this.props.user.createdAt.slice(0, 4)].join('-')}
        </div>
        {/* <div className="profileItem">
          Interests: {this.props.user.interests.join(', ')}
        </div> */}
        <div className="profileItem">
          Courses complete: {coursesComplete}
        </div>
<<<<<<< HEAD
        <div className="profileItem">
          GitHub: {this.props.user.github}
          {editGithub}
        </div>
        <div className="profileItem">
          Interests: {this.props.user.interests}
          {editInterests}
        </div>
=======
        {!this.props.isCurrentUser &&
        (<button onClick={this.addFriend.bind(this)}>
          Add Friend
        </button>)
        }
>>>>>>> add friend button adds friends
      </div>
    </div>)
  }
}


export default Profile;
