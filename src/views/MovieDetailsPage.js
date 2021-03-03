import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Cast from "../components/Cast/Cast";
import api from "../services/fetchMovies";
import { NavLink } from "react-router-dom";
import Reviews from "../components/Reviews/Reviews";
import routes from "../routes";

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    casts: [],
    reviews: [],
    from: "",
    query: "",
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    api.fetchMovieById(movieId).then((movie) =>
      this.setState({
        movie,
      })
    );
    api
      .fetchFilmCasts(movieId)
      .then((cast) => this.setState({ casts: [...cast] }));
    api.fetchFilmReviews(movieId).then((review) =>
      this.setState({
        reviews: [...review],
      })
    );
    this.setState({
      from: this.props.location.state?.from,
      query: this.props.location.state?.query,
    });
  }

  handleGoBack = () => {
    const { history } = this.props;
    this.state.query
      ? history.push({
          pathname: this.state?.from,
          search: `query=${this.state.query}`,
          query: this.state.query,
        })
      : history.push("/");
  };

  render() {
    const {
      title,
      vote_average,
      overview,
      genres,
      poster_path,
    } = this.state.movie;
    const poster = `https://image.tmdb.org/t/p/w300${poster_path}`;
    return (
      <>
        <button
          type="button"
          className="button_back"
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        <div className="movie_cont">
          <img src={poster_path && poster} alt={title} />
          <div className="movie_cont__about">
            <h2>{title}</h2>
            <p>User Score: {vote_average}/10</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <div className="movie_cont__genres">
              {genres &&
                genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
            </div>
          </div>
        </div>
        <div className="links">
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route
            path={`${this.props.match.path}/cast`}
            render={(props) => {
              return <Cast casts={this.state.casts} />;
            }}
          />
          <Route
            path={`${this.props.match.path}/reviews`}
            render={(props) => {
              return <Reviews reviews={this.state.reviews} />;
            }}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
