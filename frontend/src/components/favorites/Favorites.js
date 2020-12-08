import React, { Fragment, useContext, useEffect } from 'react'
import TeamContext from '../../context/team/teamContext';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Favorites = ({favorites, results}) => {

    // const teamContext = useContext(TeamContext);

    // const { favorites, getFavs, results } = teamContext;

    // useEffect(() => {
    //     getFavs();
    //     // eslint-disable-next-line
    // }, []);

    if (favorites === null ) {
        return (<></>)
    }

    console.log('favs', favorites)

    const faveScores = favorites.map((fave,index) => {
        let score = results.events.find(event => event.competitions[0].competitors[0].team.displayName === fave.teamName || event.competitions[0].competitors[1].team.displayName === fave.teamName )
        console.log('score',score)
        return (
            <h1>{score.shortName}</h1>
        )
    })


    return (
        <Fragment>
            {favorites.length === 0 ? <Link to='/editfavorites'>Add Favorites</Link> : <Link to='/editfavorites'>Edit Favorites</Link> }
            {favorites !== null ? faveScores : <></>}
        </Fragment>
    )
}

export default Favorites
