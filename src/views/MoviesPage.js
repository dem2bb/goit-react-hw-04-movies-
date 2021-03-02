import React, { Component } from "react";
import MovieList from "../components/MovieList/MovieList";
import api from "../services/fetchMovies";

class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
  };

  onHandleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  onFindMovies = () => {
    const inputValue = this.state.query;
    api.fetchMoviesByName(inputValue).then((films) =>
      this.setState({
        movies: [...films],
      })
    );
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <input
          type="text"
          value={this.state.query}
          onChange={this.onHandleChange}
        />
        <button type="submit" className="button" onClick={this.onFindMovies}>
          Search
        </button>
        {movies.length > 0 && <MovieList movies={movies} />}
      </>
    );
  }
}

export default MoviesPage;
