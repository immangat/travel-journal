import React from "react";
import '../styles/Card.css'
import { FaMapMarkerAlt } from 'react-icons/fa';

function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <div className="card-content">
                <div className="card--image"> 
                <img src={props.item.imageURL} alt="picture"></img>
                </div>
                <div className="card--text">
                    <div className="card--text--location">
                        <span className="card--text--location--icon"><FaMapMarkerAlt /></span>
                        <span className="card--text--location--country">{props.item.location}</span>
                        <span className="card--text--location--maps"><a href= {props.item.googleMapsUrl} target="_blank">View on Google Maps</a></span>
                    </div>
                    <h2 className="card--text-title">{props.item.title}</h2>
                    <div className="card--text--dates">{props.item.startDate}-{props.item.endDate}</div>
                    <p className="card--text--description">{props.item.description}</p>
                </div>
               
                </div>
                <hr />
        </div>
    )
}

export default Card;