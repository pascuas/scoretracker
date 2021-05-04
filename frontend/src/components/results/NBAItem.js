import React, {Fragment , useContext} from 'react';
import TeamContext from '../../context/team/teamContext';

const NBAItem = ({game, home, visitor}) => {

    const teamContext = useContext(TeamContext);
    console.log('game', game)
    console.log('home', home[0])
    console.log('visitor', visitor[0])

    const { venue, scoreboard, status} = game;
    // const {national} = game.watch.broadcast.broadcasters
    // const homeTv = game.watch.broadcast.broadcasters.hTeam
    // const visitTv = game.watch.broadcast.broadcasters.vTeam
    const { strTeamBadge, strTeam } = home[0];
    // const { strTeamBadge, strTeam } = visitor[0];

    
    // const renderTv = () => {
    //     if (national.length >= 1){
    //         return (
    //             <span className="gray">({national[0].shortName})</span>
    //         )
    //     } else {
    //         return (
    //             <Fragment>
    //                 <p className="gray">({homeTv[0].shortName})</p>
    //                 <p className="gray">({visitTv[0].shortName})</p>
    //             </Fragment>
    //         )
    //     }
    // }

    return (
        <div className="resultContainer">
            <div className="location">
                <span className="gray">{venue.name} - {venue.city}, {venue.state}</span>
            </div>
            <div className="itemFlex">
                <div className="info">
                    <img src={strTeamBadge} alt="teamlogo" width="32" height="42" />
                    <h2>{strTeam}</h2>
                    {/* {hTeam.loss !== "" && hTeam.win !== "" && <h4 className="record gray">({hTeam.win} - {hTeam.loss})</h4>} */}
                </div>
                {status === "in progress"  ? <div className="score">
                    {parseInt(scoreboard.score.home) > parseInt(scoreboard.score.away) ? <span>{scoreboard.score.home}</span> : <span className="gray">{scoreboard.score.home}</span>}
                </div> : <></> }
            </div>
            <div className="itemFlex2">
                <div className="info">
                    <img src={visitor[0].strTeamBadge} alt="teamlogo" width="32" height="42" />
                    <h2>{visitor[0].strTeam}</h2>
                    {/* {vTeam.loss !== "" && vTeam.win !== "" && <h4 className="record gray">({vTeam.win} - {vTeam.loss})</h4>} */}
                </div>
                {status === "in progress" ? <div className="score">
                    {parseInt(scoreboard.score.away) > parseInt(scoreboard.score.home) ? <span>{scoreboard.score.away}</span> : <span className="gray">{scoreboard.score.away}</span>}
                </div> : <></> }
            </div>
            {status === "in progress" ? <div className="gameInfo">
                <p>{scoreboard.currentPeriod}</p>
                <p>{scoreboard.periodTimeRemaining}</p>
            </div> : <div className="gameInfo"></div>}
        </div>
    )
}

export default NBAItem;
