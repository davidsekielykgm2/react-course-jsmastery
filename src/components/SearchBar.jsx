import React, { useState } from 'react'

import SearchIcon from '../img/icons/search.svg'

const SearchBar = ({ setMovies }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="search">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies"
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => setMovies({ title:searchTerm })}
      />
    </div>
  )
}

export default SearchBar