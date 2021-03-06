import React, { Fragment, useContext, useEffect } from 'react';
import Results from '../results/Results';
import Favorites from '../favorites/Favorites';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import TeamContext from '../../context/team/teamContext';
import Spinner from '../layout/Spinner';


const Home = () => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    const teamContext = useContext(TeamContext)

    const { user , clearErrors } = authContext;
    const { setAlert } = alertContext;
    const { results, getResults, nbaResults, getNbaResults, nbaTeams, getNbaTeams } = teamContext;

    const onClick = () => {
        setAlert('Please Sign In Or Create an Account', 'danger');
        clearErrors();
    }

    useEffect(() => {
        authContext.loadUser();
        getResults();
        getNbaResults();
        getNbaTeams();
        // eslint-disable-next-line
    }, []) // only want this to run when component loads so empty bracket is needed

    if(results === null){
        return <Spinner />
    }

    console.log('results', results)
    console.log('nbaresults', nbaResults)
    console.log('nbateams', nbaTeams)

    return (
        <Fragment> 
            <h1>Favorites</h1>
            {user !== null ? <Favorites /> : <a href='#!' onClick={onClick}>Add Favorites</a> }
            <h1>Results</h1>
            <div className='resultsGrid'>
                <Results />
            </div> 
        </Fragment> 
    )
}

export default Home
