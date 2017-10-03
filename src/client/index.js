import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';

import App from './components/App';

hydrate((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
