import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Main/App.jsx';
import Store from './components/Store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Store>
         <App />
    </Store>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();