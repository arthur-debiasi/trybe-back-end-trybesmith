import { Router } from 'express';
import * as UsersController from '../controllers/UsersController';
import UsersFields from '../middlewares/userFields';

const usersRouter = Router();

usersRouter.post('/', UsersFields, UsersController.default);

export default usersRouter;