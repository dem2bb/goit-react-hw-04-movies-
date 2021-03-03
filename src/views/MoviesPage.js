import React, { Component } from "react";
import MovieList from "../components/MovieList/MovieList";
import api from "../services/fetchMovies";
import { NavLink } from "react-router-dom";

class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
  };

  componentDidMount() {
    if (this.props.location.query) {
      api.fetchMoviesByName(this.props.location.query).then((films) =>
        this.setState({
          movies: [...films],
          query: this.props.location.query,
        })
      );
    }
  }

  onHandleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  onFindMovies = () => {
    const inputValue = this.state.query;
    this.props.history.push({
      pathname: this.props.match.url,
      search: `query=${inputValue}`,
    });
    api.fetchMoviesByName(inputValue).then((films) =>
      this.setState({
        movies: [...films],
      })
    );
    console.log(this.props.history);
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
        {movies.length > 0 && (
          <MovieList movies={movies} query={this.state.query} />
        )}
      </>
    );
  }
}

export default MoviesPage;
