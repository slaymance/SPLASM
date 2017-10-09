import React from 'react';
import tree from '../images/nodebook_tree_brown.png';

const Splash = (props) =>
  <div className="col-xs-6 col-xs-offset-3">
    <div className="rotate-circle">
      <div className="rotate-border"></div>
      <div><img className="tree" src={tree}/></div>
    </div>
  </div>;

export default Splash;
