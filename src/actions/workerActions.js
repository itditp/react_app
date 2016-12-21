import * as types from './actionTypes';

export function createWorkerSuccess(newWorker) {
  return {type: types.CREATE_WORKER_SUCCESS, newWorker};
}

export function updateWorkerSuccess(newWorker) {
  return {type: types.UPDATE_WORKER_SUCCESS, newWorker};
}

export function saveWorker(newWorker) {
	return function (dispatch) {
		return dispatch(createWorkerSuccess(newWorker));
	};
}

