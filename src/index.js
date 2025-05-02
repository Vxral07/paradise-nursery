import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// ← Swap in HashRouter instead of BrowserRouter:
import { HashRouter } from 'react-router-dom';
import store from './store/store';
import App   from './App';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* Everything after the #/ is routed client-side */}
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
