import MovieCard from './components/MovieCard'
import SearchIcon from './img/icons/search.svg'

import dataExample from './data/example.json'

const App = () => {
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Search for movies" />
        <img src={SearchIcon} alt="search" />
      </div>

      <div className="container">
        {
          dataExample.results.map(data => (
            <MovieCard movie={data}/>
          ))
        }
      </div>

    </div>
  );
}

export default App;
