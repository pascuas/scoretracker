import React, { Fragment, useContext, useEffect, useState } from 'react'
import TeamContext from '../../context/team/teamContext';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Favorites = () => {

    const teamContext = useContext(TeamContext);

    const { favorites, getFavs, getResults, results } = teamContext;

    useEffect(() => {
        getFavs();
        // eslint-disable-next-line
    }, []);


    if (results === null || favorites === null ) {
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

    // if(results.events === null) {
    //     return (<></>)
    // }

    // const faveScores = results.events.find(event => {favorites.includes(event.competitions[0].competitors[0].team.displayName) || favorites.includes(event.competitions[0].competitors[1].team.displayName)
    //     return (
    //         <h1>{event.shortName}</h1>
    //     )
    // })

    console.log('favescores', faveScores)


    return (
        <Fragment>
            {favorites.length === 0 ? <Link to='/editfavorites'>Add Favorites</Link> : <Link to='/editfavorites'>Edit Favorites</Link> }
            {favorites !== null ? faveScores : <></>}
        </Fragment>
    )
}

export default Favorites
