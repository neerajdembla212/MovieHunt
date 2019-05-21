import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieListing from './components/MovieListing/MovieListing';
const Router = props => {
    return (
        <Switch>
            <Route path="/movies" component={MovieListing} />
        </Switch>
    )
}

export default Router;