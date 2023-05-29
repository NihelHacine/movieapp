import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


function Moviecard({el}) {
  return (
<div className='body'>
<div className="card">
        <div className="image">
        <Link to={`/film/${el.name}`}><img src={el.posterurl} /></Link>
        </div>
        <div className="details">
          <div className="center">
            <Link to={`/film/${el.name}`} style={{textDecoration:'none'}}><h1>{el.name}</h1></Link>
            <p>{el.description}</p>
            <ReactStars
    count={5}
    size={24}
    activeColor="#991414"
    value={el.rating}
    edit={false}
  />
          </div>
        </div>
      </div>
</div>
  )
}

export default Moviecard