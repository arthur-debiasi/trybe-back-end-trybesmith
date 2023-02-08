import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import UsersModel from '../models/UsersModel';
import connection from '../models/connection';
import UsersService from '../services/UsersService';
import Fields from '../middlewares/Fields';

const usersRouter = Router();

const usersModel = new UsersModel(connection);
const usersService = new UsersService(usersModel);
const usersController = new UsersController(usersService);
const fields = new Fields();

usersRouter.post('/', fields.users, usersController.registerUser);

export default usersRouter;