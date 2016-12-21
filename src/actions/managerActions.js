import * as types from './actionTypes';

export function createManagerSuccess(newManager) {
  return {type: types.CREATE_MANAGER_SUCCESS, newManager};
}

export function updateManagerSuccess(newManager) {
  return {type: types.UPDATE_MANAGER_SUCCESS, newManager};
}

export function saveManager(newManager) {
	return function (dispatch) {
		return dispatch(createManagerSuccess(newManager));
	};
}

