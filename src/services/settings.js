const { REACT_APP_RapidAPI_Key, REACT_APP_RapidAPI_Host } = process.env

export const API_URL = "https://movies-app1.p.rapidapi.com/api"
export const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': REACT_APP_RapidAPI_Key,
    'X-RapidAPI-Host': REACT_APP_RapidAPI_Host
  }
}