import { API_URL, OPTIONS } from './settings'

const searchMovies = async () => {
  console.log(OPTIONS)
  const url = `${API_URL}/movies`
  const response = await fetch(url, OPTIONS)
  const json = await response.json()
  return json.results
}

export default searchMovies