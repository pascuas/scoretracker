import React, {Fragment, useContext} from 'react';
import TeamContext from '../../context/team/teamContext';
import NBAItem from './NBAItem';

const NbaResults = () => {
    const teamContext = useContext(TeamContext);

    const { nbaResults, nbaTeams } = teamContext

    console.log('basketballscores', nbaResults);


    if (!nbaResults) return <></>
    if (!nbaTeams) return <></>

    // console.log(nbaResults.results)
    console.log(nbaTeams.teams)

    const renderNBA = nbaResults.results.map((game,index) => {
        let homeTeam = nbaTeams.teams.filter(team => game.teams['home']['abbreviation'] === team.strTeamShort);
        let visitorTeam = nbaTeams.teams.filter(team => game.teams['away']['abbreviation'] === team.strTeamShort);
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
