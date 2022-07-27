import React from 'react'

const MovieCard = ({ movie: { released, imageurl, type, title } }) => {
  return (
    <div className="movie">
      <div>
        <p>{ released }</p>
      </div>
      <div>
        <img src={ imageurl[0] } alt={ title } />
      </div>
      <div>
        <span>{ type }</span>
        <h3>{ title }</h3>
      </div>
    </div>
  )
}

export default MovieCard