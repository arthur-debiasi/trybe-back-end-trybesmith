import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import loginFields from '../middlewares/loginFields';
import LoginModel from '../models/LoginModel';
import connection from '../models/connection';
import LoginService from '../services/LoginService';

const loginRouter = Router();

const loginModel = new LoginModel(connection);
const loginService = new LoginService(loginModel);
const loginController = new LoginController(loginService);

loginRouter.post('/', loginFields, loginController.login);

export default loginRouter;
