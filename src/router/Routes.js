import React, {Suspense, lazy} from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import BrowserHistory from '../helpers/history/BrowserHistory';

// components
// import Home from '../components/pages/home/Home';
// import Projects from '../components/pages/projects/Projects';
// import Resume from '../components/pages/resume/Resume';
// import Contact from '../components/pages/contact/Contact';

const Home = lazy(() => import('../components/pages/home/Home'));
const Projects = lazy(() => import('../components/pages/projects/Projects'));
const Resume = lazy(() => import('../components/pages/resume/Resume'));
const Contact = lazy(() => import('../components/pages/contact/Contact'));

const AppRoutes = () => {
    return (
        <Router history={BrowserHistory}>
            <Suspense fallback={<div>Okay</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default AppRoutes;