import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import MoviePage from './pages/Movie';
import MovieList from './components/MovieList'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={ <MovieList /> } />
          <Route path='movie'>
            <Route index element={ <MovieList /> } />
            <Route path=':movieId' element={ <MoviePage /> } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
