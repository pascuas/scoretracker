import {
    GET_RESULTS,
    GET_NBARESULTS,
    GET_FAVORITES,
    RESULTS_ERROR,
    ADD_FAVORITE,
    DELETE_FAVORITE,
    GET_TEAMS,
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_RESULTS:
            return {
                ...state,
                results: action.payload,
                loading: false
            };
        case GET_NBARESULTS:
            return {
                ...state,
                nabResults: action.payload,
                loading: false
            };
        case GET_TEAMS:
            return {
                ...state,
                teams: action.payload,
                loading: false
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [action.payload, ...state.favorites],
                loading: false
            };
        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(favorite => favorite._id !== action.payload),
                loading: false
            };
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload,
                loading: false
            };
        case RESULTS_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}