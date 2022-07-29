import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie: { year, image, genres, title, _id } }) => {
  const srcImg = image ? image : 'https://via.placeholder.com/400'
  const type = genres.length ? genres[0].name : ''

  return (
    <Link to={`/movie/${_id}`} className="movie">
      <div>
        <p>{ year }</p>
      </div>
      <div>
        <img src={ srcImg } alt={ title } />
      </div>
      <div>
        <span>{ type }</span>
        <h3>{ title }</h3>
      </div>
    </Link>
  )
}

export default MovieCard