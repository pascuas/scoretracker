import {
    GET_RESULTS,
    GET_FAVORITES,
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
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload,
                loading: false
            }
        case RESULTS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}