import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import ProductsModel from '../models/ProductsModel';
import connection from '../models/connection';
import ProductsService from '../services/ProductsService';
import Fields from '../middlewares/Fields';

const productsRouter = Router();

const productsModel = new ProductsModel(connection);
const productsService = new ProductsService(productsModel);
const productsController = new ProductsController(productsService);
const fields = new Fields();

productsRouter.post('/', fields.products, productsController.registerProducts);

productsRouter.get('/', productsController.listProducts);

export default productsRouter;