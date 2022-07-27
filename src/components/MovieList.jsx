import React from 'react'

import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
  return (
    movies?.length > 0
    ? (
      movies.map(data => (
        <MovieCard
          key={data.imdbid}
          movie={data}
        />
      ))
    )
    : (
      <div className="empty">
        <h2>No movies found</h2>
      </div>
    )
  )
}

export default MovieList