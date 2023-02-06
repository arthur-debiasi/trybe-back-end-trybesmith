import { Router } from 'express';
import * as OrdersController from '../controllers/OrdersController';

const ordersRouter = Router();

ordersRouter.get('/', OrdersController.default);

export default ordersRouter;