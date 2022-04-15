import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './components/main/App';
import Store from './components/Store';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Store>
    <App />
  </Store>
);

