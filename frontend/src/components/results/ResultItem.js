import React from 'react'

const ResultItem = ({ event }) => {

    const { name, competitions } = event

    const renderResult = competitions[0].competitors.map((competitor, index) => {
        return(
            <div className="itemFlex">
                <img src={competitor.team.logo} alt="teamlogo" />
                <h1>{competitor.team.name}</h1>
            </div>
        ) 
    })
    return (
        <div>
            {renderResult}
        </div>
    )
}

export default ResultItem
