const { REACT_APP_RapidAPI_Key, REACT_APP_RapidAPI_Host } = process.env

const API_URL = "https://ott-details.p.rapidapi.com"
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': REACT_APP_RapidAPI_Key,
    'X-RapidAPI-Host': REACT_APP_RapidAPI_Host
  }
}

const searchMovies = async ({ title = 'Endgame', page = 1 } = {}) => {
  console.log(options)
  const url = `${API_URL}/search?title=${title}&page=${page}`
  const response = await fetch(url, options)
  const json = await response.json()
  return json.results
}

export default searchMovies