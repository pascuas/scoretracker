import React, {Fragment , useContext} from 'react';
import TeamContext from '../../context/team/teamContext';

const NBAItem = ({game, home, visitor}) => {

    const teamContext = useContext(TeamContext);
    console.log('game', game)
    console.log('home', home[0])
    console.log('visitor', visitor[0])

    const { arena, hTeam, vTeam, isGameActivated, startTimeEastern, period } = game;
    const {national} = game.watch.broadcast.broadcasters
    const homeTv = game.watch.broadcast.broadcasters.hTeam
    const visitTv = game.watch.broadcast.broadcasters.vTeam
    const { strTeamBadge, strTeam } = home[0];
    // const { strTeamBadge, strTeam } = visitor[0];
    console.log(homeTv)
    
    const renderTv = () => {
        if (national.length >= 1){
            return (
                <span className="gray">({national[0].shortName})</span>
            )
        } else {
            return (
                <Fragment>
                    <p className="gray">({homeTv[0].shortName})</p>
                    <p className="gray">({visitTv[0].shortName})</p>
                </Fragment>
            )
        }
    }

    return (
        <div className="resultContainer">
            <div className="location">
                <span className="gray">{arena.name} - {arena.city}, {arena.stateAbbr}</span>
            </div>
            <div className="itemFlex">
                <div className="info">
                    <img src={strTeamBadge} alt="teamlogo" width="32" height="42" />
                    <h2>{strTeam}</h2>
                    {hTeam.loss !== "" && hTeam.win !== "" && <h4 className="record gray">({hTeam.win} - {hTeam.loss})</h4>}
                </div>
                {isGameActivated ? <div className="score">
                    {parseInt(hTeam.score) > parseInt(vTeam.score) ? <span>{hTeam.score}</span> : <span className="gray">{hTeam.score}</span>}
                </div> : <></> }
            </div>
            <div className="itemFlex2">
                <div className="info">
                    <img src={visitor[0].strTeamBadge} alt="teamlogo" width="32" height="42" />
                    <h2>{visitor[0].strTeam}</h2>
                    {vTeam.loss !== "" && vTeam.win !== "" && <h4 className="record gray">({vTeam.win} - {vTeam.loss})</h4>}
                </div>
                {isGameActivated ? <div className="score">
                    {parseInt(vTeam.score) > parseInt(hTeam.score) ? <span>{vTeam.score}</span> : <span className="gray">{vTeam.score}</span>}
                </div> : <></> }
            </div>
            {!isGameActivated ? <div className="gameInfo">
                <p>{startTimeEastern}</p>
                {renderTv()}
            </div> : <div className="gameInfo"><p>{period.current}</p></div>}
        </div>
    )
}

export default NBAItem;
