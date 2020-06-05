import express from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const itemsController = new ItemsController();
const pointsController = new PointsController();

const routes = express.Router();
const upload = multer(multerConfig);

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', upload.single('image'), pointsController.create);

export default routes;