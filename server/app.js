import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server'

import App from '../client/components/App';

const app = express();

app.use(morgan('dev'));

app.use(compression());

app.use(express.static('public'));

var renderPage = function(view, state = {}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Server Side Rendering Test</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        <script type="text/javascript">
          var __INITIAL_STATE__ = ${JSON.stringify(state)};
        </script>
      </head>
      <body>
        <div id="app">${view}</div>
        <script type="text/javascript" src="dist/bundle.js"></script>
      </body>
    </html>
  `;
};

app.get('/', (req, res) => {
  var initialView = renderToString(<App />);

  res.send(renderPage(initialView));
});

export default app;
