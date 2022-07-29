import React, { useState, useEffect } from 'react'

import MovieCard from './MovieCard'

import searchMovies from '../services/getSearchMovies'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    handleSetMovies()
  }, [])

  const handleSetMovies = () => {
    setLoading(true)
    searchMovies().then(data => {
      console.log({data})
      setMovies(data)
      setLoading(false)
    })
  }

  return (
    loading
    ? (
      <div className="empty">
        <h2>Loading...</h2>
      </div>
    )
    : (
      movies?.length > 0
      ? (
        movies.map(data => (
          <MovieCard
            key={data._id}
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
  )
}

export default MovieList