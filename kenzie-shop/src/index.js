import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from './Routes';
import { GlobalStyle } from './Styles/GlobalStyle';
import store from './Store/modules/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle/>
        <RoutesComponent/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
