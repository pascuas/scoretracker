import React from 'react';
import Results from '../results/Results';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to='/favorites'>Favorites</Link>
            <Results />
        </div>
    )
}

export default Home
