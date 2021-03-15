import React, { Fragment, useContext, useEffect } from 'react';
import ResultItem from './ResultItem';
import TeamContext from '../../context/team/teamContext';

const Results = () => {
    const teamContext = useContext(TeamContext);

    const { results, favorites, getResults } = teamContext;

    // useEffect(() => {
    //     getResults();
    //     // eslint-disable-next-line
    // }, []);
    
    if(!results) {
        return <></>
    }

    const renderResults = results.events.map((event, index) => {
        if (favorites !== null && !favorites.some(fave => fave.teamName === event.competitions[0].competitors[0].team.displayName || fave.teamName === event.competitions[0].competitors[1].team.displayName)){
        return(
            <ResultItem key={index} event={event} />
        )
        } else if (favorites === null){
            return (
                <ResultItem key={index} event={event} />
            )
        } 
    })

    return (
        <Fragment>
            {renderResults}
        </Fragment>
    )
}

export default Results
