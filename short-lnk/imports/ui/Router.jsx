import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Container from './Container';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Link from './pages/Links';
import NotFound from './pages/NotFound';


class Router extends Component {
    render() {
        return (
            <Container>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/links" component={Link} />
                    <Route component={NotFound} />
                </Switch>
            </Container>
        );
    }
}

export default Router;
