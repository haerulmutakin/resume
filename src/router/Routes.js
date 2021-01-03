import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import BrowserHistory from '../helpers/history/BrowserHistory';
import Home from '../components/pages/home/Home';

const AppRoutes = () => {
    return (
        <Router history={BrowserHistory}>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default AppRoutes;