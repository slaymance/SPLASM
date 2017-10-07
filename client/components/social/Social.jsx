import React from 'react';
import $ from 'jquery';

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
			<div>
	    	<h2>{this.props.user.name}'s friends:</h2>
	    	<ul>
	    		{this.state.friends && 
		    	this.state.friends.map(friend => {
		    		return (<li key={friend.id}> {friend.name}</li>);
		    	})}
	    	</ul>
	  	</div>
		)
	}
}

export default Social;
