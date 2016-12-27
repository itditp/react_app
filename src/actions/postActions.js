import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadPostsSuccess(posts) {
	return {type: types.LOAD_POSTS_SUCCESS, posts};
}

export function loadPosts() {
	return dispatch => {
		dispatch(beginAjaxCall());
		return fetch('https://jsonplaceholder.typicode.com/posts')
		.then( response => response.json() )
		.then( posts => {
			dispatch(loadPostsSuccess(posts));
		}).catch(error => {
			throw(error);
		});
	};
}