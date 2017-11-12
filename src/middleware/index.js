import compression from 'compression';
import morgan from 'morgan';
import session from './session';

const applyMiddleware = (app) => {
  app.use(compression());
  app.use(morgan('dev'));
  app.use(session);
};

export default applyMiddleware;
