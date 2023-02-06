import { IUser } from '../interfaces';
import * as UsersModel from '../models/UsersModel';
import jwtGenerate from './jwtGenerate';

const MESSAGES = {
  PRODUCT_NOT_FOUND: 'Product not found',
  UNAUTHORIZED: 'Invalid email or password',
  USER_EXISTS: 'Username already exists',
  FORBIDDEN: 'You are not allowed to take this action',
};

export default async function registerUser({
  username,
  vocation,
  level,
  password,
}: IUser) {
  const userExists = await UsersModel.findUser(username);
  if (userExists) {
    return { type: 400, message: MESSAGES.USER_EXISTS };
  }
  const newUser = await UsersModel.registerUser({
    username,
    vocation,
    level,
    password,
  });
  console.log(newUser);
  
  return { type: 201, message: jwtGenerate({ username, vocation, level, password }) };
}