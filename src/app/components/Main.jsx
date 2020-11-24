import React from 'react';
import { Provider, connect } from 'react-redux';
import { store } from '../store';
import * as mutations from '../store/mutations';
import { ConnectedDashboard } from './Dashboard';
import { ConnectedLogin } from './Login';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { ConnectedNavigation } from './Navigation';
import { ConnectedTaskDetails } from './TaskDetails';

const RouteGuard = Component => ({ match }) => {
    if (store.getState().session.authenticated !== 'AUTHENTICATED') {
        return <Redirect to="/" />
    } else {
        return <Component match={match} />
    }
};

const Container = ({ session }) => {
    const loggedIn = session.authenticated === mutations.AUTHENTICATED;
    return (
        <>
            <ConnectedNavigation />
            <Route
                exact
                path="/"
                render={() => (loggedIn)? <Redirect to="/dashboard" /> : <ConnectedLogin />}
            />
            <Route
                exact
                path="/dashboard"
                render={RouteGuard(ConnectedDashboard)}
            />
            <Route
                exact
                path="/task/:id"
                render={RouteGuard(ConnectedTaskDetails)}
            />
        </>
    );
};

const ConnectedContainer = connect(state => state)(Container);

export const Main = () => (
    <BrowserRouter>
        <Provider store={store}>
            <ConnectedContainer />
        </Provider>
    </BrowserRouter>
);
