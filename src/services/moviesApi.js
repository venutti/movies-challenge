import axios from "axios";

const APIKEY = "69fc259515129760c85662f08c141b6f";

const getMoviesData = (apiResult) => {
  return apiResult.map((data) => {
    return {
      title: data.title,
      poster: data.poster_path
        ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
        : "",
      overview: data.overview,
      id: data.id,
    };
  });
};

async function searchMovies(keyword) {
  const apiResponse = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=es-ES&query=${keyword}`
  );
  return getMoviesData(apiResponse.data.results);
}

async function getPopularMovies() {
  const apiResponse = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc&language=es-ES`
  );
  return getMoviesData(apiResponse.data.results);
}

async function getMovieDetail(movieID) {
  const apiResponse = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${APIKEY}&language=es-ES`
  );
  return {
    genres: apiResponse.data.genres.map((genre) => genre.name),
    overview: apiResponse.data.overview,
    poster: apiResponse.data.poster_path
      ? `https://image.tmdb.org/t/p/w500${apiResponse.data.poster_path}`
      : "",
    releaseDate: apiResponse.data.release_date
      ? apiResponse.data.release_date.split("-").reverse().join("/")
      : "-/-/-",
    runtime: apiResponse.data.runtime,
    title: apiResponse.data.title,
    tagline: apiResponse.data.tagline,
    rating: apiResponse.data.vote_average,
  };
}

export { searchMovies, getPopularMovies, getMovieDetail };
