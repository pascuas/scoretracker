import React, { useReducer } from 'react';
import axios from 'axios';
import TeamContext from './teamContext';
import teamReducer from './teamReducer';

import {
    GET_RESULTS,
    RESULTS_ERROR
} from '../types';

const TeamState = props => {
    const initialState = {
        results: null,
        error: null
    };


    const [ state, dispatch ] = useReducer(teamReducer, initialState);

    // Get results
    const getResults = async () => {
        try {
            const res = await axios.get("https://www.thesportsdb.com/api/v1/json/4013017/latestamericanfootball.php");
    
            dispatch({ type: GET_RESULTS, payload: res.data});
        } catch (err) {
            dispatch({ type: RESULTS_ERROR, payload: err.response.msg });
        }
    }

    return (
        <TeamContext.Provider
        value={{
            results: state.results,
            error: state.error,
            getResults
        }}>
            { props.children }
        </TeamContext.Provider>
    );
}

export default TeamState