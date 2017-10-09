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
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.course.usertocourse.status !== this.props.course.usertocourse.status) {
        document.getElementById('course' + nextProps.course.id).value = nextProps.course.usertocourse.status;
    }
  }

  render() {
    let status = (<div className="col-sm-12 col-sm-offset-0 col-xs-5 col-xs-offset-7 text-center">{this.props.course.usertocourse.status}</div>);
    let button = '';
    if (this.props.edit) {
      let statuses = ['100%', '75%', '50%', '25%', '0%'];
      status = (<select onChange={this.updateStatus.bind(this)} className="col-sm-12 col-sm-offset-0 col-xs-5 col-xs-offset-7 text-center" value={this.props.course.usertocourse.status}>
        {statuses.map((status, i) => {
          return (<option key={i} value={status}>{status}</option>)
        })}
      </select>);
      button = <button onClick={this.deleteCourse.bind(this, this.props.course.name)}>Remove Course</button>;
    }

    return (<li id={'course' + this.props.course.id} className="col-xs-12 course">
      <div className="col-sm-1 col-sm-offset-0 col-xs-2 col-xs-offset-5 text-center thumbnail">
        {this.props.course.name[0]}
      </div>
      <div className="col-xs-12 col-sm-8">
        <a href={this.props.course.url}>
          <h4>{this.props.course.name}</h4>
        </a>
        <p>{this.props.course.parent}</p>
        {button}
      </div>
      <div className="col-sm-3 col-xs-12 status text-center">
        <label>Status:</label>
        {status}
      </div>
    </li>);
  }
}

export default CourseListItem;
