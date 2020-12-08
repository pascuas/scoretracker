import React, {Fragment, useContext} from 'react';
import TeamContext from '../../context/team/teamContext';

const FaveItem = ({ team, fave }) => {

    const teamContext = useContext(TeamContext)

    const { deleteFave } = teamContext

    const {strTeamLogo, teamName} = team;

    const {_id} = fave
    
    const onDelete = () => {
        deleteFave(_id)
    }

    return (
        <Fragment>
            <img src={strTeamLogo} alt={teamName}/>
            <i className="far fa-times-circle" onClick={onDelete}></i>
        </Fragment>
    )
}

export default FaveItem
