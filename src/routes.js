import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientsController from './app/controllers/RecipientsController';
import DelivererController from './app/controllers/DelivererController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.put('/user', UserController.update);

routes.post('/recipient', RecipientsController.store);
routes.put('/recipient/:id', RecipientsController.update);

routes.get('/deliverer', DelivererController.index);
routes.post('/deliverer', DelivererController.store);
routes.put('/deliverer/:id', DelivererController.update);
routes.delete('/deliverer/:id', DelivererController.destroy);

export default routes;
