import React, { useState } from 'react'

import SearchIcon from '../img/icons/search.svg'

const SearchBar = ({ setMovies }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMovies({ title:searchTerm })
  }

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies"
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={handleSubmit}
      />
    </form>
  )
}

export default SearchBar