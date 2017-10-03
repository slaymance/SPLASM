import React from 'react';

const Profile = (props) =>
  <div style={{wordWrap: 'break-word'}}>
    <img src={props.user.picture} className="col-sm-12 col-sm-offset-0 col-xs-10 col-xs-offset-1"/>
    <div className="col-xs-12">
      <h3>{props.user.name}</h3>
      <div className="profileItem">
        Member since: {[props.user.createdAt.slice(5, 10), props.user.createdAt.slice(0, 4)].join('-')}
      </div>
      <div className="profileItem">
        Interests: {props.user.interests.join(', ')}
      </div>
      <div className="profileItem">
        Statistics: (use props.user.courses)
      </div>
    </div>
  </div>;

export default Profile;
