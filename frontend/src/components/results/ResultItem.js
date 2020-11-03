import React, { Fragment } from 'react'

const ResultItem = ({ event }) => {

    const { name, competitions } = event

    const renderResult = competitions[0].competitors.map((competitor, index) => {
        return(
            <Fragment key={index}>
                <div className="itemFlex">
                    <div className="info" >
                        <img src={competitor.team.logo} alt="teamlogo" width="42" height="52" />
                        <h1>{competitor.team.name}</h1>
                        {/* <p>{competitor.score}</p> */}
                    </div>
                    <div className="score" >
                        {parseInt(competitor.score) > parseInt(competitions[0].competitors[0].score) || parseInt(competitor.score) > parseInt(competitions[0].competitors[1].score) ? <span>{competitor.score}</span> : <span className="gray">{competitor.score}</span> }
                    </div>
                </div>
            </Fragment>
        ) 
    })



    return (
        <div className="resultContainer">
            {renderResult}
        </div>
    )
}

export default ResultItem
