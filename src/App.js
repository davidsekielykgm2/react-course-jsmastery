import { useState, useEffect } from 'react'

import MovieCard from './components/MovieCard'
import SearchIcon from './img/icons/search.svg'

import searchMovies from './services/getSearchMovies'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    searchMovies().then(data => {
      setMovies([...data.results])
    })
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Search for movies" />
        <img src={SearchIcon} alt="search" />
      </div>

      <div className="container">
        {
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
        }
      </div>

    </div>
  );
}

export default App;
