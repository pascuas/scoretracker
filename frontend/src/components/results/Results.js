import React, { Fragment, useContext, useEffect } from 'react';
import ResultItem from './ResultItem';
import TeamContext from '../../context/team/teamContext';

const Results = () => {
    const teamContext = useContext(TeamContext);

    const { results, getResults } = teamContext;

    useEffect(() => {
        getResults();
        // eslint-disable-next-line
    }, []);
    
    if(results === null) {
        return <></>
    }
    console.log('results',results.events)

    return (
        <Fragment>
            {results.events.map(event => (
                <ResultItem event={event} />
            ))}
        </Fragment>
    )
}

export default Results
