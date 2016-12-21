import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function managerReducer(state = initialState.managers, action) {
  switch (action.type) {
    case types.CREATE_MANAGER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.newManager, {id: + new Date})
      ];

    case types.UPDATE_MANAGER_SUCCESS:
      return [
        ...state.filter(manager => manager.id !== action.manager.id),
        Object.assign({}, action.manager)
      ];

    default:
      return state;
  }
}