import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const TaskBar = () => {
	return (
		<nav>
		<IndexLink to="/" activeClassName="active">Service</IndexLink>
		{" | "}
		<Link to="/list" activeClassName="active">List</Link>
		</nav>  
	);
};

export default TaskBar;