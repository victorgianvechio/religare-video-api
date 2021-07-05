import { Router } from 'express';
import path from 'path';

import publicPath from './utils/publicPath';

const routes = new Router();

// --------------------------------- DEFAULT ---------------------------------//
routes.get('/', (request, response) => {
  response.sendFile(path.resolve(publicPath, 'index.html'));
});

// --------------------------------- SUCCESS ---------------------------------//
routes.get('/success', (request, response) => {
  response.sendFile(path.resolve(publicPath, 'success.html'));
});

// ---------------------------------- ERROR ----------------------------------//
routes.get('/error', (request, response) => {
  response.sendFile(path.resolve(publicPath, 'error.html'));
});

export default routes;
