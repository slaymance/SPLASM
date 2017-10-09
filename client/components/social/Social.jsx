import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Social extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentWillReceiveProps(nextProps) {
    this.setState({friends: nextProps.user.friend});
	}
	render() {
		return (
			<div className="friends col-xs-12">
	    	<h2 className="col-xs-12 text-center">{this.props.user.name}'s friends:</h2>
	    	<ul className="col-xs-12 text-center">
	    		{this.state.friends &&
		    	this.state.friends.map(friend => {
		    		return (<Link replace to={'/search/users/' + friend.name} key={friend.id}>
							<li className="col-xs-12"> {friend.name}</li>
						</Link>);
		    	})}
	    	</ul>
	  	</div>
		)
	}
}

export default Social;
