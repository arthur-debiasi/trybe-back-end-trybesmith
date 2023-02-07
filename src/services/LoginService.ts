import { ILogin, IUser } from '../interfaces';
import * as LoginModel from '../models/LoginModel';
import jwtGenerate from './jwtGenerate';

export default async function listOrders(login: ILogin) {
  const user = await LoginModel.default(login);
  console.log(user);
  
  if (user.length === 0) return { type: 401, message: { message: 'Username or password invalid' } };
  return { type: 200, message: { token: jwtGenerate(user as unknown as IUser) } };
}