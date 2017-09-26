import express from 'express';
import morgan from 'morgan';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server'

import App from '../client/components/App';

const app = express();

app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  var initialView = renderToString(<App />);
  res.render('index', { initialView });
});

export default app;
