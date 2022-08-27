import React from 'react';
import ReactDOM from 'react-dom/client';
import  { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router } from 'react-router-dom'
import accountReducer from './reducers/accountReducer'
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

let store = createStore(accountReducer, composeEnhancers(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 //<React.StrictMode>
 < Provider store = {store}>
    <Router>
        <App />
    </Router>    
 </Provider>
 //</React.StrictMode>
);

