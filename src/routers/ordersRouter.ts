import { Router } from 'express';
import OrdersController from '../controllers/OrdersController';
import OrdersModel from '../models/OrdersModel';
import connection from '../models/connection';
import OrdersService from '../services/OrdersService';
import ProductsModel from '../models/ProductsModel';
import JwtValidate from '../middlewares/JwtValidate';

const ordersRouter = Router();

const ordersModel = new OrdersModel(connection);
const productsOrders = new ProductsModel(connection);
const ordersService = new OrdersService(ordersModel, productsOrders);
const ordersController = new OrdersController(ordersService);
const jwtValidate = new JwtValidate();

ordersRouter.get('/', ordersController.listOrders);
ordersRouter.post('/', jwtValidate.auth, ordersController.listOrders);

export default ordersRouter;