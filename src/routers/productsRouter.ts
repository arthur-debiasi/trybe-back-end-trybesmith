import { Router } from 'express';
import * as productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.post('/', productsController.default);

export default productsRouter;