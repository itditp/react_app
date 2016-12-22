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
		const posts = this.props.posts;
		const cutPosts = posts.slice(0, posts.length-1); 	//cutLastPost

		return (
			<div>
			<PostList loading={this.props.loading} posts={cutPosts} />
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