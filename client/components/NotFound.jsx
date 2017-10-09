import React from 'react';
import nodeTree from '../images/nodebook_tree.png';

const NotFound = (props) =>
  <div>
    <img src={nodeTree} className="col-sm-4 col-sm-offset-2 col-xs-10 col-xs-offset-1"/>
    <div className="notFoundText col-sm-3 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center">
      <h1>404:</h1>
      <h2>Page not found.</h2>
    </div>
  </div>;

export default NotFound;
