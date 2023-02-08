import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import productsFields from '../middlewares/productsFields';
import ProductsModel from '../models/ProductsModel';
import connection from '../models/connection';
import ProductsService from '../services/ProductsService';

const productsRouter = Router();

const productsModel = new ProductsModel(connection);
const productsService = new ProductsService(productsModel);
const productsController = new ProductsController(productsService);

productsRouter.post('/', productsFields, productsController.registerProducts);

productsRouter.get('/', productsController.listProducts);

export default productsRouter;