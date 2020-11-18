import React, { Fragment, useContext, useEffect } from 'react'
import TeamContext from '../../context/team/teamContext';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Favorites = () => {

    const teamContext = useContext(TeamContext);

    const { favorites, getFavs } = teamContext;

    useEffect(() => {
        getFavs();
        // eslint-disable-next-line
    }, []);

    if(favorites === null) {
        return <></>
    }

    console.log('favs', favorites)


    return (
        <Fragment>
            {favorites.length === 0 ? <Link to='/editfavorites'>Add Favorites</Link> : <Link to='/editfavorites'>Edit Favorites</Link> }
            <h1>Favs</h1>
        </Fragment>
    )
}

export default Favorites
