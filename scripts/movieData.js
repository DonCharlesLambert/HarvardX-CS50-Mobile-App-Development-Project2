export const searchMovies = async (searchParam) => {
  let response = await fetch("http://www.omdbapi.com/?s=" + searchParam + "&apikey=3faebcd8")
  let responseJSON = await response.json()
  let searchResult = await responseJSON.Search
  return searchResult
}