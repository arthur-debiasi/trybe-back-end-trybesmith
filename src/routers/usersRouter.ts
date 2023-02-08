import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import UsersFields from '../middlewares/userFields';
import UsersModel from '../models/UsersModel';
import connection from '../models/connection';
import UsersService from '../services/UsersService';

const usersRouter = Router();

const usersModel = new UsersModel(connection);
const usersService = new UsersService(usersModel);
const usersController = new UsersController(usersService);

usersRouter.post('/', UsersFields, usersController.registerUser);

export default usersRouter;