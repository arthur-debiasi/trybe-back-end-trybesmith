import { Router } from 'express';
import * as productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.post('/', productsController.registerProduct);

productsRouter.get('/', productsController.listProducts);

export default productsRouter;