import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './App.container';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './store';

ReactDOM.render(
  <Provider store={configureStore()}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
