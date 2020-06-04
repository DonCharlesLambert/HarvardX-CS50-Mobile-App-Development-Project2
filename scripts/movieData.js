export const searchMovies = async (searchParam) => {
  console.log("searchMovies was called with " + searchParam)
  let response = await fetch("http://www.omdbapi.com/?s=" + searchParam + "&apikey=3faebcd8")
  let responseJSON = await response.json()
  let searchResult = await responseJSON.Search
  return searchResult
}

export const getMovie = async (movieTitle) => {
  console.log("get movie started with title " + movieTitle)
  let response = await fetch("http://www.omdbapi.com/?t=" + movieTitle + "&apikey=3faebcd8")
  let responseJSON = await response.json()
  return responseJSON
}