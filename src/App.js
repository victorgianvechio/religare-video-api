import express from 'express';
import morgan from 'morgan';

import allowCors from './middlewares/cors';

import ApiRoutes from './api.routes';
import AppRoutes from './app.routes';

class App {
  constructor() {
    this.nodeEnv = process.env.NODE_ENV;
    this.subDirectory = process.env.SUBDIRECTORY;

    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(allowCors);
    this.server.use(express.static('public'));

    this.server.use(
      morgan(`[:date] - :method [:status] :url - :response-time ms`)
    );
  }

  routes() {
    // ROTAS DA APLICAÇÃO
    this.server.use(AppRoutes);

    // ROTAS DA API
    this.server.use(`${this.subDirectory}/api/v1`, ApiRoutes);

    // IGNORA O REQUEST DEFAULT DO FAVICON
    this.server.get('/favicon.ico', (req, res) => res.status(204));
  }
}

export default new App().server;
