import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
    switch(action.type) {
        case SET_ALERT:
            return [...state, action.payload] // returning array directly
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload);
        default:
            return state;
    }
}