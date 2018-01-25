import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistor} from 'react-router';
import routes from './routes';
import './styles/styles.css';

render(
    <Router history={browserHistor} routes={routes} />,
    document.getElementById('app')
);