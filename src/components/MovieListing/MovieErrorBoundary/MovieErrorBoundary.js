
import React, { Component } from 'react';

export default class MovieErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log('errors in boundary ', error);

    }

    render() {
        if (this.state.hasError) {
            return <h3>Couldn't display Movie data.</h3>;
        }

        return this.props.children;
    }
}