import React, {Fragment, useContext} from 'react';
import TeamContext from '../../context/team/teamContext';

const FaveItem = ({ team, fave }) => {

    const teamContext = useContext(TeamContext)

    const { deleteFave } = teamContext

    const {strTeamLogo} = team;

    const {_id} = fave
    
    const onDelete = () => {
        deleteFave(_id)
    }

    return (
        <Fragment>
            <img src={strTeamLogo} />
            <i class="far fa-times-circle" onClick={onDelete}></i>
        </Fragment>
    )
}

export default FaveItem
