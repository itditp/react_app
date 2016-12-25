import * as types from './actionTypes';

export function createManagerSuccess(newManager) {
  return {type: types.CREATE_MANAGER_SUCCESS, newManager};
}

export function updateManagerSuccess(manager) {
  return {type: types.UPDATE_MANAGER_SUCCESS, manager};
}

export function saveManager(newManager) {
	return function (dispatch) {
		return dispatch(createManagerSuccess(newManager));
	};
}

export function updateManager(manager) {
	return function (dispatch) {
		return dispatch(updateManagerSuccess(manager));
	};
}
