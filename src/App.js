import SearchIcon from './img/icons/search.svg'

const App = () => {
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Search for movies" />
        <img src={SearchIcon} alt="search" />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>Year</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/400" alt="Img Movie" />
          </div>
          <div>
            <span>Tipo</span>
            <h3>Title</h3>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
