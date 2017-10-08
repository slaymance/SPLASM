import React from 'react';

class CourseListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteCourse(course) {
    this.props.deleteCourse(course);
  }

  updateStatus(event) {
    this.props.updateStatus(this.props.course.name, event.target.value);
    event.target.value = '0%';
  }

  render() {
    let status = (<div className="col-xs-12 text-center status">{this.props.course.usertocourse.status}</div>);
    let button = '';
    if (this.props.edit) {
      let statuses = ['100%', '75%', '50%', '25%', '0%'];
      status = (<select onChange={this.updateStatus.bind(this)} className="col-xs-12" defaultValue={this.props.course.usertocourse.status}>
        {statuses.map((status, i) => {
          return (<option key={i}>{status}</option>)
        })}
      </select>);
      button = <button onClick={this.deleteCourse.bind(this, this.props.course.name)}>Remove Course</button>;
    }

    return (<li className="col-xs-12 course">
      <div className="col-sm-1 col-xs-12 thumbnail">
        {this.props.course.name[0]}
      </div>
      <div className="col-xs-12 col-sm-8">
        <a href={this.props.course.url}>
          <h4>{this.props.course.name}</h4>
        </a>
        <p>{this.props.course.parent}</p>
        {button}
      </div>
      <div className="col-sm-3 col-xs-12 status">
        <label>Status:</label>
        {status}
      </div>
    </li>);
  }
}

export default CourseListItem;
