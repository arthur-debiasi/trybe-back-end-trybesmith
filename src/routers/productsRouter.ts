import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import Fields from '../middlewares/Fields';

const productsRouter = Router();

const productsController = new ProductsController();
const fields = new Fields();

productsRouter.post('/', fields.products, productsController.registerProducts);

productsRouter.get('/', productsController.listProducts);

export default productsRouter;