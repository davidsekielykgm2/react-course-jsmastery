import { API_URL, OPTIONS } from './settings'

const searchMovieById = async (movieId) => {
  const url = `${API_URL}/movie/${movieId}`
  const response = await fetch(url, OPTIONS)
  const json = await response.json()
  return json.result
}

export default searchMovieById