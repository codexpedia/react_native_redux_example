import { COUNTER_CHANGE } from '../constants';

// A reducer is a pure function that takes the previous state and an action as arguments and returns a new state.
// The reducer is instrumental in keeping the current state of count updated throughout our app as it changes.

const initialState = {
    count: 0
};

const countReducer = (state = initialState, action) => {

    switch(action.type) {

        case COUNTER_CHANGE:
            return {
                ...state,
                count:action.payload
            };
        default:
            return state;
    }
}

export default countReducer;
