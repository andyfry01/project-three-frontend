import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import LandingPage from '../containers/LandingPage';
import SignedInPage from '../containers/SignedInPage';
import PlaylistPage from '../containers/PlaylistPage';


const routes = (
    <Router history={hashHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component={LandingPage} />
    <Route path='SignedInPage' component={SignedInPage} />
    <Route path='PlaylistPage' component={PlaylistPage} />
    <Route path='LandingPage' component={LandingPage} />
    </Route>
    </Router>
)

export default routes;
