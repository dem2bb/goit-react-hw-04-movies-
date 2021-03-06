import React, { Component } from "react";
import MovieList from "../components/MovieList/MovieList";
import api from "../services/fetchMovies";

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    api.fetchTrandingMovies().then((movies) =>
      this.setState({
        movies: [...movies],
      })
    );
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Top trending today</h1>
        <MovieList movies={movies} />
      </>
    );
  }
}

export default HomePage;
