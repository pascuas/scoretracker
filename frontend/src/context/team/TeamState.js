import React, { useReducer } from 'react';
import TeamContext from './teamContext';
import teamReducer from './teamReducer';

import {
    GET_RESULTS
} from '../types';

const TeamState = props => {
    const initialState = {
        results: null,
        error: null
    }
}

const [ state, dispatch ] = useReducer(teamReducer, initialState);