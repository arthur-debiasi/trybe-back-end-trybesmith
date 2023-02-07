import { Router } from 'express';
import * as LoginController from '../controllers/LoginController';
import loginFields from '../middlewares/loginFields';

const loginRouter = Router();

loginRouter.post('/', loginFields, LoginController.default);

export default loginRouter;
