import React, { Fragment, useContext, useEffect } from 'react';
import TeamContext from '../../context/team/teamContext';

const Results = () => {
    const teamContext = useContext(TeamContext);

    const { results, getResults } = teamContext;

    useEffect(() => {
        getResults();
        // eslint-disable-next-line
    }, []);

    console.log('results',results)

    return (
        <Fragment>
            <h3>Results</h3>
        </Fragment>
    )
}

export default Results
