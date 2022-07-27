import React from 'react'

const MovieCard = ({ movie: { released, imageurl, type, title } }) => {
  const imgProp = imageurl ? imageurl : []
  const srcImg = imgProp.length ? imgProp[0] : 'https://via.placeholder.com/400'

  return (
    <div className="movie">
      <div>
        <p>{ released }</p>
      </div>
      <div>
        <img src={ srcImg } alt={ title } />
      </div>
      <div>
        <span>{ type }</span>
        <h3>{ title }</h3>
      </div>
    </div>
  )
}

export default MovieCard