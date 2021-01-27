import React, {useContext} from 'react';
import TeamContext from '../../context/team/teamContext';
import AlertContext from '../../context/alert/alertContext';

const FaveItem = ({ team, fave }) => {

    const teamContext = useContext(TeamContext);

    const alertContext = useContext(AlertContext);

    const { deleteFave } = teamContext;

    const { setAlert } = alertContext

    const {strTeamLogo, strTeam} = team;

    const {_id} = fave
    
    const onDelete = () => {
        deleteFave(_id)
        setAlert( `${strTeam} was deleted as a favorite`, 'danger');
    }

    return (
        <div>
            <img src={strTeamLogo} alt={strTeam}/>
            <i className="far fa-times-circle" onClick={onDelete}></i>
        </div>
    )
}

export default FaveItem
