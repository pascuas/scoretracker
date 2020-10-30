import {
    GET_RESULTS,
    RESULTS_ERROR
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_RESULTS:
            return {
                ...state,
                results: action.payload,
                loading: false
            };
            default:
                return state
    }
}