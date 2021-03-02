import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import Loader from "react-loader-spinner";
import AppBar from "./components/AppBar/AppBar";

const HomePage = lazy(() =>
  import("./views/HomePage.js" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage.js" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage.js" /* webpackChunkName: "movies-details-page" */
  )
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView.js" /* webpackChunkName: "not-found-page" */)
);

const App = () => (
  <>
    <AppBar />
    <Suspense
      fallback={<Loader type="Oval" color="#00BFFF" height={100} width={100} />}
    >
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movie} component={MovieDetailsPage} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
