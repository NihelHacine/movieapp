import React from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

function Film({movies}) {
    const n = useParams();
    const movie = movies.filter((el) => el.name == n.name)[0];
  return (
  <div style={{backgroundColor:'black'}}>
    <iframe width="100%" height="500" src={movie.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div className='descfilm'>
        <h1>{movie.name}</h1>
        <p>{movie.description}</p>
        <ReactStars
    count={5}
    size={24}
    activeColor="#991414"
    value={movie.rating}
    edit={false}
  />
    </div>
  </div>
  )
}

export default Film