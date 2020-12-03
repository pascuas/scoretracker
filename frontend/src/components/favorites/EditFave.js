import React, { Fragment, useContext, useEffect, useState } from 'react'
import TeamContext from '../../context/team/teamContext';

const EditFave = () => {
    const teamContext = useContext(TeamContext)

    const { teams, getTeams, addFaves, favorites } = teamContext

    const [favorite, setFavorite] = useState({
        teamName: ''
    });


    useEffect(() => {
        getTeams();
        // eslint-disable-next-line
    }, []);

    if(teams === null) {
        return <></>
    }
    
    console.log('teams', teams)
    console.log('favs', favorites)


    const { teamName } = favorite

    const onChange = e => {
        setFavorite({...favorite, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        addFaves(favorite)
        setFavorite('')
    }

    const choices = teams.teams.map((team, index) => {
        return(
            <div className="form-check" key={index}>
                <input className="form-check-input" name="teamName" type="radio" checked={teamName === `${team.strTeam}`} value={team.strTeam} onChange={onChange} id="defaultCheck1"></input>
                <label className="form-check-label" htmlFor="defaultCheck1">{team.strTeam}</label>
            </div>                                                                                                                                                                                                                                  
        )
    })

    // let faves = []
    // if(favorites !== null) {
    //     for (let i = 0; i<favorites.length; i++){
    //         for(let j=0; j<teams.teams.length; j++){
    //             if(favorites[i].teamName === teams.teams[j].strTeam){
    //                 faves.push(teams.teams[j])
    //             }
    //         }
    //     }
    // }
    // console.log(faves)

    if(favorites === null) {
        return (
            <div>
            <h1>This is where I add or delete favorites</h1>
            <form onSubmit={onSubmit}>
            {choices}
            <button type='submit'>Add</button>
            </form>
        </div>
        )
    }

    const renderFaves = favorites.map((fave, index) => {
        let team = teams.teams.find(team => team.strTeam === fave.teamName)
        console.log('team', team)
        return (
            <Fragment>
                <img src={team.strTeamLogo} />
                <h1>{fave.teamName}</h1>
            </Fragment>
        )
    })


    return (
        <div>
            {renderFaves}
            <h1>This is where I add or delete favorites</h1>
            <form onSubmit={onSubmit}>
            {choices}
            <button type='submit'>Add</button>
            </form>
        </div>
    
    )
}

export default EditFave
