import { Router } from 'express';
import OrdersController from '../controllers/OrdersController';
import JwtValidate from '../middlewares/JwtValidate';
import Fields from '../middlewares/Fields';

const ordersRouter = Router();

const ordersController = new OrdersController();
const jwtValidate = new JwtValidate();
const fields = new Fields();

ordersRouter.get('/', ordersController.listOrders);
ordersRouter.post('/', jwtValidate.auth, fields.orders, ordersController.registerOrders);

export default ordersRouter;