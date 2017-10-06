import React from 'react';
import CourseListItem from './CourseListItem.jsx';

class Courses extends React.Component {
  constructor(props) {
    super(props);
  }

  requestToAddCourse(event) {
    let course = event.target.value;
    if (course !== 'Add course') {
      course = course.replace('/','ASCII47');
      this.props.addCourse(course, 'POST');
    }
  }

  requestToDeleteCourse(course) {
    course = course.replace('/','ASCII47');
    this.props.addCourse(course, 'DELETE');
  }

  render() {
    return (<div>
      <select className="col-xs-12" onChange={this.requestToAddCourse.bind(this)}>
        <option>Add course</option>
        {this.props.allCourses.map((course, index) => {
          return <option key={course.id}>{course.name}</option>
        })}
      </select>
      <ul style={{listStyle: 'none'}}>
        {this.props.user.courses.map((course, index) => {
          return <CourseListItem deleteCourse={this.requestToDeleteCourse.bind(this)} edit={this.props.edit} course={course} key={index}/>
        })}
      </ul>
    </div>);
  }
}





export default Courses;
