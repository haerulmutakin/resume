import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import BrowserHistory from '../helpers/history/BrowserHistory';

// components
import Home from '../components/pages/home/Home';
import Projects from '../components/pages/projects/Projects';
import Resume from '../components/pages/resume/Resume';

const AppRoutes = () => {
    return (
        <Router history={BrowserHistory}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/resume" component={Resume} />
            </Switch>
        </Router>
    )
}

export default AppRoutes;