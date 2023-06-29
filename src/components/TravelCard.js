import React from 'react'

function TravelCard (props){
    return(
        <>
            <div className="travelCard">
                <img className="travelCard--img" src={props.item.img}/>
                <div className="travelCard--content">
                    <img className="travelCard--pinLogo" src="/images/PinLogo.svg"/>
                    <div className="travelCard--location">{props.item.location}</div>
                    <a className = "travelCard--googleMapLink" href = {props.item.googleMapLink} target='blank'>View on Google Maps</a>
                    <div className="travelCard--title">{props.item.title}</div>
                    <div className="travelCard--date">{props.item.startDate} - {props.item.endDate}</div>
                    <div className="travelCard--description">{props.item.description}</div>     
                </div>     
            </div>
        </>
    )
}

export default TravelCard;