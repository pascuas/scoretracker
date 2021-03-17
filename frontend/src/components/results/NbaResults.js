import React, {Fragment, useContext} from 'react';
import TeamContext from '../../context/team/teamContext';
import NBAItem from './NBAItem';

const NbaResults = () => {
    const teamContext = useContext(TeamContext);

    const { nbaResults, nbaTeams } = teamContext

    console.log('basketballscores', nbaResults);


    if (!nbaResults) return <></>
    if (!nbaTeams) return <></>

    console.log(nbaResults.games)
    console.log(nbaTeams.teams)

    const renderNBA = nbaResults.games.map((game,index) => {
        let homeTeam = nbaTeams.teams.filter(team => game.hTeam.triCode === team.strTeamShort);
        let visitorTeam = nbaTeams.teams.filter(team => game.vTeam.triCode === team.strTeamShort);
        return (
            <NBAItem key={index} game={game} home={homeTeam} visitor={visitorTeam} />
        )
    })

    return (
        <div>
            {renderNBA}
        </div>
    )
}
export default NbaResults
