const { Router } = require('express');
const authMiddlewares = require('./app/middlewares/auth');

const SessionController = require('./app/controllers/SessionController');
const UserController = require('./app/controllers/UserController');
const PromotionController = require('./app/controllers/PromotionController');
const MessageController = require('./app/controllers/MessageController');

const routes = new Router();

// Without authetications:

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/promotions/:id/stores', PromotionController.index);
routes.get('/messages/:id/stores', MessageController.index);

// Authetications//
routes.use(authMiddlewares);
// Authetications//

// With authetications:

routes.put('/users', UserController.update);

routes.post('/promotions', PromotionController.store);
routes.put('/promotions/:id', PromotionController.update);
routes.delete('/promotions/:id', PromotionController.delete);

routes.post('/messages', MessageController.store);
routes.put('/messages/:id', MessageController.update);
routes.delete('/messages/:id', MessageController.delete);

module.exports = routes;
