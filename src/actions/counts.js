// Actions are JavaScript objects that represent payloads of information
// that send data from your application to your Redux store.

// Actions have a type and an optional payload. In our case, the type will
// be COUNTER_CHANGE, and the payload count which we are assigning into our
// count variable in store.

import { COUNTER_CHANGE } from '../constants';
export function changeCount(count) {
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}
