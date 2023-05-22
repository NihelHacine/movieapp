import React from 'react'
import ReactStars from "react-rating-stars-component";


function Moviecard({el}) {
  return (
<div className='body'>
<div className="card">
        <div className="image">
          <img src={el.posterurl} />
        </div>
        <div className="details">
          <div className="center">
            <h1>{el.name}</h1>
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