import { Router } from 'express';
import OrdersController from '../controllers/OrdersController';
import OrdersModel from '../models/OrdersModel';
import connection from '../models/connection';
import OrdersService from '../services/OrdersService';
import ProductsModel from '../models/ProductsModel';
import JwtValidate from '../middlewares/JwtValidate';
import Fields from '../middlewares/Fields';

const ordersRouter = Router();

const ordersModel = new OrdersModel(connection);
const productsOrders = new ProductsModel(connection);
const ordersService = new OrdersService(ordersModel, productsOrders);
const ordersController = new OrdersController(ordersService);
const jwtValidate = new JwtValidate();
const fields = new Fields();

ordersRouter.get('/', ordersController.listOrders);
ordersRouter.post('/', jwtValidate.auth, fields.orders, ordersController.registerOrders);

export default ordersRouter;