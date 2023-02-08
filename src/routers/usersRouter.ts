import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import Fields from '../middlewares/Fields';

const usersRouter = Router();

const usersController = new UsersController();
const fields = new Fields();

usersRouter.post('/', fields.users, usersController.registerUser);

export default usersRouter;