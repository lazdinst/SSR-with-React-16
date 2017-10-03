import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';

import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import App from './client/components/App';

const app = express();

app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(compression());

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  const context = {};

  const initialState = {};

  const initialView = renderToString((
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  ));

  if (context.url) {
    res.redirect(context.url, context.status);
  } else {
    if (context.status) {
      res.status(context.status);
    }

    res.render('index', { initialView, initialState });
  }
});

export default app;
