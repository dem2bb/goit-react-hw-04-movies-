import axios from "axios";
const key = "1abcab100520369e11a771de2f4e2532";

const fetchTrandingMovies = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
    .then(({ data }) => data.results);
};

const fetchMoviesByName = (value) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${value}&page=1&include_adult=false`
    )
    .then(({ data }) => data.results);
};

const fetchMovieById = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    )
    .then((response) => response.data);
};

const fetchFilmCasts = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
    )
    .then((response) => response.data.cast);
};

const fetchFilmReviews = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
    )
    .then((response) => response.data.results);
};
const fetches = {
  fetchTrandingMovies,
  fetchMoviesByName,
  fetchMovieById,
  fetchFilmCasts,
  fetchFilmReviews,
};
export default fetches;
