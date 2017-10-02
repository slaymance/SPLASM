import React from 'react';
import CourseListItem from './CourseListItem.jsx';

const Courses = () =>
  <div style={{border: '2px solid gray'}}>
    <h2>Course Content</h2>
    <ul style={{listStyle: 'none'}}>
      <CourseListItem />
      <CourseListItem />
      <CourseListItem />
    </ul>
  </div>;

export default Courses;
