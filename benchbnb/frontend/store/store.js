import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import rootReducer from "../reducers/root_reducer";
import thunk from "redux-thunk";

const configureStore = (preloadedState = {}) => (
        createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
    )

export default configureStore;