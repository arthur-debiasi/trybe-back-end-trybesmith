import { Router } from 'express';
import * as UsersController from '../controllers/UsersController';

const usersRouter = Router();

usersRouter.post('/', UsersController.default);

export default usersRouter;