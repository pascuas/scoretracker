import React, { useReducer } from 'react';
import axios from 'axios';
import TeamContext from './teamContext';
import teamReducer from './teamReducer';

import {
    GET_RESULTS,
    GET_NBARESULTS,
    GET_FAVORITES,
    GET_TEAMS,
    ADD_FAVORITE,
    DELETE_FAVORITE,
    RESULTS_ERROR
} from '../types';

const TeamState = props => {
    const initialState = {
        results: null,
        nbaResults: null,
        favorites: null,
        error: null,
        teams: null
    };


    const [ state, dispatch ] = useReducer(teamReducer, initialState);

    // Get results
    const getResults = async () => {
        try {
            const res = await axios.get("https://cors-anywhere.herokuapp.com/https://www.thesportsdb.com/api/v1/json/4013017/latestamericanfootball.php");
    
            dispatch({ type: GET_RESULTS, payload: res.data});
        } catch (err) {
            dispatch({ type: RESULTS_ERROR, payload: err.response.msg });
        }
    }

    // get nba results
    const getNbaResults = async () => {
        try {
            const res = await axios.get("https://cors-anywhere.herokuapp.com/https://www.thesportsdb.com/api/v2/json/4013017/livescore.php?s=Basketball");

            dispatch({ type: GET_NBARESULTS, payload: res.data });
        } catch (error) {
            dispatch({ type: RESULTS_ERROR, payload: error.response.msg });
        }
    }

    // Get favorites
    const getFavs = async () => {
        try {
            const res = await axios.get('api/favorites');

            dispatch({ type: GET_FAVORITES, payload: res.data})
        } catch (err) {
            dispatch({ type: RESULTS_ERROR, payload: err.response.msg });
        }
    }

    // Get teams
    const getTeams = async () => {
        try {
            const res = await axios.get("https://cors-anywhere.herokuapp.com/https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL");
    
            dispatch({ type: GET_TEAMS, payload: res.data});
        } catch (err) {
            dispatch({ type: RESULTS_ERROR, payload: err.response.msg });
        }
    }

    // Add Favorites
    const addFaves = async favorite => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/favorites', favorite, config);
            dispatch({ type: ADD_FAVORITE, payload: res.data})
        } catch (err) {
            dispatch({ type: RESULTS_ERROR, payload: err.response.msg})
        }
    }

    // Delete Favorite
    const deleteFave = async id => {
        try {
            await axios.delete(`/api/favorites/${id}`);
            dispatch({ type: DELETE_FAVORITE, payload: id});
        } catch (err) {
            dispatch({ type: RESULTS_ERROR, payload: err.response.msg})
        }
    }

    return (
        <TeamContext.Provider
        value={{
            results: state.results,
            favorites: state.favorites,
            error: state.error,
            teams: state.teams,
            getResults,
            getNbaResults,
            getTeams,
            getFavs,
            addFaves,
            deleteFave
        }}>
            { props.children }
        </TeamContext.Provider>
    );
}

export default TeamState