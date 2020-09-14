const apiKey = 'a2966636ad0d96c0d9b6ac34803f43ad';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
}


export default requests
