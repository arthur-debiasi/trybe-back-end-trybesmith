import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import LoginModel from '../models/LoginModel';
import connection from '../models/connection';
import LoginService from '../services/LoginService';
import Fields from '../middlewares/Fields';

const loginRouter = Router();

const loginModel = new LoginModel(connection);
const loginService = new LoginService(loginModel);
const loginController = new LoginController(loginService);
const fields = new Fields();

loginRouter.post('/', fields.login, loginController.login);

export default loginRouter;
