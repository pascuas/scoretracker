import React, { Fragment, useContext, useEffect } from 'react';
import Results from '../results/Results';
import Favorites from '../favorites/Favorites';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import TeamContext from '../../context/team/teamContext';


const Home = () => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    const teamContext = useContext(TeamContext);

    const { user , clearErrors } = authContext;
    const { setAlert } = alertContext;
    const { getFavs, favorites, results, getResults } = teamContext;

    const onClick = () => {
        setAlert('Please Sign In Or Create an Account', 'danger');
        clearErrors();
    }

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []) // only want this to run when component loads so empty bracket is needed

    return (
        <Fragment>
            <h1>Favorites</h1>
            {user !== null ? <Favorites /> : <a href='#!' onClick={onClick}>Add Favorites</a> }
            <h1>Results</h1>
            <Results />
        </Fragment>
    )
}

export default Home
