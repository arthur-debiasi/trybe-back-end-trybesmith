import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import Fields from '../middlewares/Fields';

const loginRouter = Router();

const loginController = new LoginController();
const fields = new Fields();

loginRouter.post('/', fields.login, loginController.login);

export default loginRouter;
