import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import MovieListing from './components/MovieListing/MovieListing';
import RouterHOC from './RouterHOC';

const Router = props => {
    return (
        <Switch>
            <RouterHOC path="/movies" componentPath="./components/MovieListing/MovieListing" />
            {/* <Route path="/movies" component={MovieListing} /> */}
        </Switch>
    )
}

export default Router;