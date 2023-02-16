/* eslint-disable object-curly-newline */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import country from './Country/countries.js';
import pollutionReducer from './POLLUTION/pollution.js';

const rootReducer = combineReducers({
  country_name: country,
  pollution: pollutionReducer,
});

const store = configureStore({
  reducer: rootReducer,
}, applyMiddleware(thunk, logger));

export default store;
