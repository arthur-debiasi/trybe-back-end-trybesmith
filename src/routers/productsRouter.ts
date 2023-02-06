import { Router } from 'express';
import * as ProductsController from '../controllers/ProductsController';

const productsRouter = Router();

productsRouter.post('/', ProductsController.registerProduct);

productsRouter.get('/', ProductsController.listProducts);

export default productsRouter;