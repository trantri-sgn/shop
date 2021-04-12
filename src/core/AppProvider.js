import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';

let store;

export default function AppProvider({ children, reducers = {} }) {
    if (!store) {
        reducers = combineReducers(reducers)
        const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose
        store = createStore(reducers, composeEnhancers())
    }
    return (
        <Provider store={store}>
            <Router>
                {children}
            </Router>
        </Provider>
    )
}
