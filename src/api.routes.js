import { Router } from 'express';

import UploadController from './controller/UploadController';

const routes = new Router();

// --------------------------------- DEFAULT ---------------------------------//
routes.get('/', (request, response) => {
  return response
    .status(200)
    .json({ message: `${process.env.APP_NAME} is running` });
});

// ---------------------------------- UPLOAD ---------------------------------//
routes.post('/upload', UploadController.uploadFile);
routes.post('/uploadForm', UploadController.uploadFileForm);

export default routes;
