import React from 'react'

function Movie({movie}) {
  return (
    <div className="card" >
        <div>
          <img className="movie-poster" src={movie.posterurl} alt={movie.name} />
        </div>
        <div className="movie-details">
        <h4 className="movie-name">
          {movie.name}
        </h4>
        </div>
    </div>
  )
}

export default Movie