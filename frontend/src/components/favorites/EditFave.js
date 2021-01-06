import React, { useContext, useEffect, useState } from 'react'
import TeamContext from '../../context/team/teamContext';
import AlertContext from '../../context/alert/alertContext';
import FaveItem from './FaveItem';

const EditFave = () => {
    const teamContext = useContext(TeamContext)

    const alertContext = useContext(AlertContext)

    const { teams, getTeams, addFaves, favorites } = teamContext

    const { setAlert } = alertContext

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
        setAlert(`${favorite.teamName} was added as a favorite`, 'success')
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


    if(favorites === null) {
        return (
            <div>
            <form onSubmit={onSubmit} className='faveForm'>
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
            <FaveItem team={team} fave={fave} key={index}/>
        )
    })


    return (
        <div>
            <div className='renderFaveGrid'>
                {renderFaves}
            </div>
            <form onSubmit={onSubmit} className='faveForm'>
            {choices}
            <button type='submit'>Add</button>
            <button><a href="/">Back To Scores</a></button>
            </form>
        </div>
    
    )
}

export default EditFave
