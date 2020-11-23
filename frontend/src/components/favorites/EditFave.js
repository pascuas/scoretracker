import React, { Fragment, useContext, useEffect } from 'react'
import TeamContext from '../../context/team/teamContext';

const EditFave = () => {
    const teamContext = useContext(TeamContext)

    const { teams, getTeams } = teamContext

    useEffect(() => {
        getTeams();
        // eslint-disable-next-line
    }, []);

    console.log('teams', teams)

    return (
        <div>
            <h1>This is where I add or delete favorites</h1>
        </div>
    )
}

export default EditFave
