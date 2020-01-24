import { combineReducers, createStore } from 'redux';
import countReducer from '../reducers/countReducer';

// The combineReducer function combines all the different reducers into one and forms the global state.
// So this is the global state of our whole application.
const rootReducer = combineReducers({ count: countReducer });

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
