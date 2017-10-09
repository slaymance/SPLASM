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

  requestToChangeStatus(course, status) {
    course = course.replace('/','ASCII47');
    course += '?status=' + status;
    this.props.addCourse(course, 'PUT');
  }

  render() {
    let addCourse = '';
    if (this.props.edit) {
      addCourse = (<select className="col-xs-12 addCourse" onChange={this.requestToAddCourse.bind(this)}>
        <option>Add course</option>
        {this.props.allCourses.map((course, index) => {
          return <option key={course.id}>{course.name}</option>
        })}
      </select>);
    }

    let courseList = (<ul className="courselist col-xs-11">
      <li className="col-xs-12">
        <h4 className="col-xs-12 text-center">No courses to display</h4>
      </li>
    </ul>);
    if (this.props.user.courses.length > 0) {
      courseList = (<ul className="courselist" style={{listStyle: 'none'}}>
        {this.props.user.courses.map((course, index) => {
          return <CourseListItem updateStatus={this.requestToChangeStatus.bind(this)} deleteCourse={this.requestToDeleteCourse.bind(this)} edit={this.props.edit} course={course} key={index}/>
        })}
      </ul>);
    }

    return (<div className="col-xs-12">
      {addCourse}
      {courseList}
    </div>);
  }
}





export default Courses;
