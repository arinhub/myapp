import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from './App';
import Store from './store';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';


ReactDOM.render(
    <Provider store={ Store }>
        <div className={'wrapper'} >
        <App />
        </div>
    </Provider>, 
    document.getElementById('root')
);