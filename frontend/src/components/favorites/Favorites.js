import React, { Fragment, useContext, useEffect } from 'react'
import TeamContext from '../../context/team/teamContext';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Favorites = () => {

    const teamContext = useContext(TeamContext);

    const { favorites, getFavs, results } = teamContext;

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
        const renderTv = score.competitions[0].broadcasts[0].names.map((name, index) => {
            return(
                <span className="gray" key={index}> ({name}) </span>
            )
        })
        console.log('score',score)
        return (
            <div className="resultContainer">
            <div className="location">
                <span className="gray">{score.competitions[0].venue.fullName} - {score.competitions[0].venue.address.city}, {score.competitions[0].venue.address.state}</span>
            </div>
            <div className="itemFlex">
                <div className="info" >
                    <img src={score.competitions[0].competitors[0].team.logo} alt="teamlogo" width="42" height="52" />
                    {score.competitions[0].competitors[0].team.name ? <h1>{score.competitions[0].competitors[0].team.name}</h1> : <h1>{score.competitions[0].competitors[0].team.displayName}</h1> }
                    <h3 className="record gray">({score.competitions[0].competitors[0].records[0].summary})</h3>
                </div>
                {score.status.type.description !== "Scheduled" ? <div className="score" >
                    {parseInt(score.competitions[0].competitors[0].score) > parseInt(score.competitions[0].competitors[0].score) || parseInt(score.competitions[0].competitors[0].score) > parseInt(score.competitions[0].competitors[1].score) ? <span>{score.competitions[0].competitors[0].score}</span> : <span className="gray">{score.competitions[0].competitors[0].score}</span> }
                </div> : <></>}
            </div>
            <div className="itemFlex2">
                <div className="info" >
                    <img src={score.competitions[0].competitors[1].team.logo} alt="teamlogo" width="42" height="52" />
                    {score.competitions[0].competitors[1].team.name ? <h1>{score.competitions[0].competitors[1].team.name}</h1> : <h1>{score.competitions[0].competitors[1].team.displayName}</h1> }
                    <h3 className="record gray">({score.competitions[0].competitors[1].records[0].summary})</h3>
                </div>
                {score.status.type.description !== "Scheduled" ? <div className="score" >
                    {parseInt(score.competitions[0].competitors[1].score) > parseInt(score.competitions[0].competitors[0].score) || parseInt(score.competitions[0].competitors[1].score) > parseInt(score.competitions[0].competitors[1].score) ? <span>{score.competitions[0].competitors[1].score}</span> : <span className="gray">{score.competitions[0].competitors[1].score}</span> }
                </div> : <></>}
            </div>
            {score.status.type.description === "Scheduled" ? <div className="gameInfo">
                <p>{score.status.type.shortDetail}</p>
                {renderTv}
            </div> : <div className="gameInfo"><p>{score.status.type.shortDetail}</p></div>}
        </div>
        )
    }) 


    console.log('favescores', faveScores)

    for (let i = 0; i<faveScores.length; i++){
        for (let j=1; j<faveScores.length; j++){
            if (faveScores[i] === faveScores[j]){
                faveScores.splice(i,1)
            }
        }
    }


    return (
        <Fragment>
            {favorites.length === 0 ? <Link to='/editfavorites'>Add Favorites</Link> : <Link to='/editfavorites'>Edit Favorites</Link> }
            {faveScores}
        </Fragment>
    )
}

export default Favorites
