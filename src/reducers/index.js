import {combineReducers} from 'redux';
import workers from './workerReducer';
import managers from './managerReducer';
import posts from './postReducer';
import  ajaxCallsInProgress from './ajaxStatusReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	workers,
	managers,
	posts,
	ajaxCallsInProgress,
	form: formReducer
});

export default rootReducer;