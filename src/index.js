import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// add basename here:
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import App   from './App';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
);
