import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function workerReducer(state = initialState.workers, action) {
  switch (action.type) {
    case types.CREATE_WORKER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.newWorker, {id: + new Date, isWorker: true})
      ];

    case types.UPDATE_WORKER_SUCCESS:
      return [
        ...state.filter(worker => worker.id !== action.worker.id),
        Object.assign({}, action.worker)
      ];

    default:
      return state;
  }
}