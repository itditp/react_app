import * as types from './actionTypes';

export function createWorkeruccess(manager) {
  return {type: types.CREATE_MANAGER_SUCCESS, manager};
}
