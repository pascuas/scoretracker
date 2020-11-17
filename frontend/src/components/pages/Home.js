import React, { useContext, useEffect } from 'react';
import Results from '../results/Results';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';


const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []) // only want this to run when component loads so empty bracket is needed

    return (
        <div>
            <Link to='/favorites'>Favorites</Link>
            <Results />
        </div>
    )
}

export default Home
