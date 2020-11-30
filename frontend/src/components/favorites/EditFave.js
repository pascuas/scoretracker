import React, { Fragment, useContext, useEffect } from 'react'
import TeamContext from '../../context/team/teamContext';

const EditFave = () => {
    const teamContext = useContext(TeamContext)

    const { teams, getTeams } = teamContext

    useEffect(() => {
        getTeams();
        // eslint-disable-next-line
    }, []);

    if(teams === null) {
        return <></>
    }

    console.log('teams', teams)
    const choices = teams.teams.map((team, index) => {
        return(
            <div className="form-check" key={index}>
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                <label className="form-check-label" htmlFor="defaultCheck1">{team.strTeam}</label>
            </div>
        )
    })

    return (
        <div>
            <h1>This is where I add or delete favorites</h1>
            {choices}
        </div>
        
    )
}

export default EditFave
