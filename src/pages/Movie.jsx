import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import searchMovieById from '../services/getMovieById'

const MoviePage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    searchMovieById(movieId)
    .then(data => {
      console.log(data)
      setMovie(data)
    })
  }, [movieId])

  return (
    <div className='movie-page'>
      <h2>{movie?.title}</h2>
    </div>
  )
}

export default MoviePage