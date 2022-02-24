import Movie from "./Movie"

function MovieList({category, movies, search}) {
  return (
    <div className="movie-list">
      <h2>
        {category}
      </h2>
      <div className="movie-list-container">
       {movies.filter(movie => movie.name.includes(search)).map(movie => {
         return(
        <Movie movie={movie}/>
         )
       })}

      </div>
    </div>
  )
}

export default MovieList