import * as types from './actionTypes';

export function createWorkerSuccess(newWorker) {
  return {type: types.CREATE_WORKER_SUCCESS, newWorker};
}

export function updateWorkerSuccess(worker) {
  return {type: types.UPDATE_WORKER_SUCCESS, worker};
}


export function saveWorker(newWorker) {
	return function (dispatch) {
		return dispatch(createWorkerSuccess(newWorker));
	};
}

export function updateWorker(worker) {
	return function (dispatch) {
		console.log(worker);
		return dispatch(updateWorkerSuccess(worker));
	};
}
