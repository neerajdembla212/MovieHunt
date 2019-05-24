import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const RouterHOC = props => {
    const LazyComponent = React.lazy(() => import(`${props.componentPath}`))
    return (
        <Route path={props.path} render={() => {
            return (
                <Suspense fallback={<div>Loading Component... </div>}>
                    <LazyComponent />
                </Suspense>
            )
        }} />
    )
}

export default RouterHOC;