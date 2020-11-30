import React, { Fragment, useContext, useEffect, useState } from 'react'
import TeamContext from '../../context/team/teamContext';

const EditFave = () => {
    const teamContext = useContext(TeamContext)

    const { teams, getTeams, addFaves } = teamContext

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


    const { teamName } = favorite

    const onChange = e => {
        setFavorite({...favorite, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        addFaves(favorite)
    }

    const choices = teams.teams.map((team, index) => {
        return(
            <div className="form-check" key={index}>
                <input className="form-check-input" type="checkbox" value={team.strTeam} onChange={onChange} id="defaultCheck1"></input>
                <label className="form-check-label" htmlFor="defaultCheck1">{team.strTeam}</label>
            </div>
        )
    })

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

export default EditFave
