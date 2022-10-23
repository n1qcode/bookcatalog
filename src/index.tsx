import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './App';
import StyleProvider from './providers/StyleProvider/StyleProvider';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StyleProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </StyleProvider>
    </BrowserRouter>
  </Provider>
);
