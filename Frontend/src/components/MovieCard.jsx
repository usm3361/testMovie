import React from 'react'
import {Link} from 'react-router'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
      <img src={movie.Images[0]} alt="" />
      <h3>{movie.title}</h3>
      <p>Year: {movie.Year}</p>
      <p>Rating:{movie.imdbRating}</p>
      <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
    </div>
  )
}

export default MovieCard
