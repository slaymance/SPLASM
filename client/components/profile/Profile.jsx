import React from 'react';

const Profile = () =>
  <div style={{wordWrap: 'break-word'}}>
    <h2>Profile content goes here</h2>
    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="col-xs-12"/>
    <h3>props.user.username</h3>
    <div className="profileItem">
      Member since: props.user.createdAt
    </div>
    <div className="profileItem">
      Interests: props.user.interests.join(', ')
    </div>
    <div className="profileItem">
      Statistics: (use props.user.courses)
    </div>
  </div>;

export default Profile;
