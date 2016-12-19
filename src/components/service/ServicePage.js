import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../../actions/postActions';
import PostList from './PostList';
import {browserHistory} from 'react-router';

class ServicePage extends React.Component {

	constructor() {
		super();
	}

	render() {
		

		return (
			<div>
			<PostList loading={this.props.loading} posts={this.props.posts} />
			</div>
			);
	}
}

ServicePage.propTypes = {
	posts: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		posts: state.posts,
		loading: state.ajaxCallsInProgress > 0
	};
}

export default connect(mapStateToProps)(ServicePage);