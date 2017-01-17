// tiene assieme tutti i reducers

import { combineReducers } from 'redux';
import { routeReducer } from 'react-reouter-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, router: routeReducer});

export default rootReducer;
