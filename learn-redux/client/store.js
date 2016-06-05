import {creaeStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments
};
/*
NOTE: this could also be setup like this:
posts: posts,
comments: comments
but we can use this short-cut form because the names are the same
I think he said this is possible with ES6 
*/

const store = creaeStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
