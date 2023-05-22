import React from 'react'
import Moviecard from './Moviecard'
import Ajoutmovie from './Ajoutmovie';

function Movieslist({movies, setmovies, text, stars}) {
   
  return (
    <div className='moviecontain'>
      <div className='add'><marquee style={{width:'80%'}}><h1>Movies list </h1></marquee></div>
      <div className='add'><Ajoutmovie movies={movies} setmovies={setmovies}/></div>
    <div className='contenu'>
      {movies
      .filter((el) => el.name.toLowerCase().includes(text.toLowerCase()) && 
                      el.rating>=stars)
      .map((el) =>
      <Moviecard el={el}/>)
      .reverse()} 
    </div>
    </div>
  )
}

export default Movieslist