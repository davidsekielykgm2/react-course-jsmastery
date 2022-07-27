import { useState, useEffect } from 'react'

import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

import searchMovies from './services/getSearchMovies'

const App = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    handleSetMovies()
  }, [])

  const handleSetMovies = ({ title = 'Endgame' } = {}) => {
    setLoading(true)
    searchMovies({ title }).then(data => {
      setMovies([...data.results])
      setLoading(false)
    })
  }

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <SearchBar setMovies={handleSetMovies} />

      <div className="container">
        {
          loading
          ? (
            <div className="empty">
              <h2>Loading...</h2>
            </div>
          )
          : (
            <MovieList movies={movies} />
          )
        }
      </div>

    </div>
  );
}

export default App;
