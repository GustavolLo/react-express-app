import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import { ConnectedNavigation } from './Navigation';
import { ConnectedTaskDetails } from './TaskDetails';

export const Main = () => (
    <BrowserRouter>
        <Provider store={store}>
            <div>
                <ConnectedNavigation />
                <Route 
                    exact
                    path="/dashboard" 
                    render={() => (<ConnectedDashboard />)}
                />
                <Route 
                    exact
                    path="/task/:id" 
                    render={({match}) => (<ConnectedTaskDetails match={match} />)}
                />
            </div>
        </Provider>
    </BrowserRouter>
);
