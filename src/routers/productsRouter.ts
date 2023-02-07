import { Router } from 'express';
import * as ProductsController from '../controllers/ProductsController';
import productsFields from '../middlewares/productsFields';

const productsRouter = Router();

productsRouter.post('/', productsFields, ProductsController.registerProduct);

productsRouter.get('/', ProductsController.listProducts);

export default productsRouter;