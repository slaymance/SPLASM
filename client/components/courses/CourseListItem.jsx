import React from 'react';

const CourseListItem = () =>
  <li style={{display: 'inline-block'}} >
    <div className="col-xs-12 col-sm-9">
      <a href="https://www.khanacademy.org/computing/computer-programming/programming">
        <h4>Intro to JS: Drawing & Animation</h4>
      </a>
      <p>Computer programming</p>
    </div>
    <div className="col-sm-3 col-xs-12">
      <label>Status:</label>
      <select className="col-xs-12">
        <option>100%</option>
        <option>75%</option>
        <option>50%</option>
        <option>25%</option>
        <option>0%</option>
      </select>
    </div>
  </li>;

export default CourseListItem;
