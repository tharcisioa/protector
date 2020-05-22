import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import TaskEdit from './components/TaskEdit';
import Nova from './components/Nova';

if (document.getElementById('root')) {
    ReactDOM.render(
         <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/:id/edit" component={TaskEdit} />
                    <Route exact path="/nova" component={Nova} />
                    <App />
                </Switch>
            </div>
        </BrowserRouter>
        , document.getElementById('root'));
}