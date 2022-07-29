import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="container">
        <Outlet />
      </div>

    </div>
  );
}

export default App;
