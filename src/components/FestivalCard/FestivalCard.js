import { Link } from 'react-router-dom';
import React from 'react'

function FestivalCard({ _id, name, image, type }) {
  return (
    <div className="FestivalCard">
        <Link to={`/festival/${_id}`}>
            <h1>{name}</h1>
        </Link>
        <img src={image} alt="festivalImg"/>
        <p>Type: {type}</p>
    </div>
  )
}

export default FestivalCard