import React, { Fragment } from 'react'

const ResultItem = ({ event }) => {

    const { name, competitions, status } = event

    // const renderResult = competitions[0].competitors.map((competitor, index) => {
    //     return(
    //         <Fragment key={index}>
    //             <div className="itemFlex">
    //                 <div className="info" >
    //                     <img src={competitor.team.logo} alt="teamlogo" width="42" height="52" />
    //                     {competitor.team.name ? <h1>{competitor.team.name}</h1> : <h1>{competitor.team.displayName}</h1> }
    //                     <h3 className="record gray">({competitor.records[0].summary})</h3>
    //                 </div>
    //                 {status.type.description !== "Scheduled" ? <div className="score" >
    //                     {parseInt(competitor.score) > parseInt(competitions[0].competitors[0].score) || parseInt(competitor.score) > parseInt(competitions[0].competitors[1].score) ? <span>{competitor.score}</span> : <span className="gray">{competitor.score}</span> }
    //                 </div> : <></>}
    //             </div>
    //         </Fragment>
    //     ) 
    // })


    return (
        <div className="resultContainer">
            <div className="itemFlex">
                <div className="info" >
                    <img src={competitions[0].competitors[0].team.logo} alt="teamlogo" width="42" height="52" />
                    {competitions[0].competitors[0].team.name ? <h1>{competitions[0].competitors[0].team.name}</h1> : <h1>{competitions[0].competitors[0].team.displayName}</h1> }
                    <h3 className="record gray">({competitions[0].competitors[0].records[0].summary})</h3>
                </div>
                {status.type.description !== "Scheduled" ? <div className="score" >
                    {parseInt(competitions[0].competitors[0].score) > parseInt(competitions[0].competitors[0].score) || parseInt(competitions[0].competitors[0].score) > parseInt(competitions[0].competitors[1].score) ? <span>{competitions[0].competitors[0].score}</span> : <span className="gray">{competitions[0].competitors[0].score}</span> }
                </div> : <></>}
            </div>
            <div className="itemFlex2">
                <div className="info" >
                    <img src={competitions[0].competitors[1].team.logo} alt="teamlogo" width="42" height="52" />
                    {competitions[0].competitors[1].team.name ? <h1>{competitions[0].competitors[1].team.name}</h1> : <h1>{competitions[0].competitors[1].team.displayName}</h1> }
                    <h3 className="record gray">({competitions[0].competitors[1].records[0].summary})</h3>
                </div>
                {status.type.description !== "Scheduled" ? <div className="score" >
                    {parseInt(competitions[0].competitors[1].score) > parseInt(competitions[0].competitors[0].score) || parseInt(competitions[0].competitors[1].score) > parseInt(competitions[0].competitors[1].score) ? <span>{competitions[0].competitors[1].score}</span> : <span className="gray">{competitions[0].competitors[1].score}</span> }
                </div> : <></>}
            </div>
            <p>schedule</p>
        </div>
    )
}

export default ResultItem
