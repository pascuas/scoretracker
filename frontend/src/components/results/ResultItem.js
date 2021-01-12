import React, {useContext} from 'react';
import TeamContext from '../../context/team/teamContext';


const ResultItem = ({ event }) => {

    const teamContext = useContext(TeamContext);

    const { favorites } = teamContext

    const { competitions, status } = event

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

    console.log('resultitem', favorites)


    const renderTv = competitions[0].broadcasts[0].names.map((name, index) => {
        return(
            <span className="gray" key={index}> ({name}) </span>
        )
    })


    return (
        <div className="resultContainer">
            <div className="location">
                <span className="gray">{competitions[0].venue.fullName} - {competitions[0].venue.address.city}, {competitions[0].venue.address.state}</span>
            </div>
            <div className="itemFlex">
                <div className="info" >
                    <img src={competitions[0].competitors[0].team.logo} alt="teamlogo" width="42" height="52" />
                    {competitions[0].competitors[0].team.name  ? <h2>{competitions[0].competitors[0].team.name}</h2> : <h2>{competitions[0].competitors[0].team.displayName}</h2> }
                    <h4 className="record gray">({competitions[0].competitors[0].records[0].summary})</h4>
                </div>
                {status.type.description !== "Scheduled" ? <div className="score" >
                    {parseInt(competitions[0].competitors[0].score) > parseInt(competitions[0].competitors[0].score) || parseInt(competitions[0].competitors[0].score) > parseInt(competitions[0].competitors[1].score) ? <span>{competitions[0].competitors[0].score}</span> : <span className="gray">{competitions[0].competitors[0].score}</span> }
                </div> : <></>}
            </div>
            <div className="itemFlex2">
                <div className="info" >
                    <img src={competitions[0].competitors[1].team.logo} alt="teamlogo" width="42" height="52" />
                    {competitions[0].competitors[1].team.name ? <h2>{competitions[0].competitors[1].team.name}</h2> : <h2>{competitions[0].competitors[1].team.displayName}</h2> }
                    <h4 className="record gray">({competitions[0].competitors[1].records[0].summary})</h4>
                </div>
                {status.type.description !== "Scheduled" ? <div className="score" >
                    {parseInt(competitions[0].competitors[1].score) > parseInt(competitions[0].competitors[0].score) || parseInt(competitions[0].competitors[1].score) > parseInt(competitions[0].competitors[1].score) ? <span>{competitions[0].competitors[1].score}</span> : <span className="gray">{competitions[0].competitors[1].score}</span> }
                </div> : <></>}
            </div>
            {status.type.description === "Scheduled" ? <div className="gameInfo">
                <p>{status.type.shortDetail}</p>
                {renderTv}
            </div> : <div className="gameInfo"><p>{status.type.shortDetail}</p></div>}
        </div>
    ) 
}

export default ResultItem
