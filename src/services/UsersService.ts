import { IUser } from '../interfaces';
import jwtGenerate from './jwtGenerate';
import { usersValidation } from './validations/inputValidation';

import UsersModel from '../models/UsersModel';

export default class UsersService {
  private model: UsersModel;

  constructor(model: UsersModel) {
    this.model = model;
  }

  public registerUser = async (user: IUser) => {
    const { type, message } = usersValidation(user);
    if (type) return { type, message };
    const [userExists] = await this.model.findUser(user.username);
    if (userExists) {
      return { type: 400, message: 'Username already exists' };
    }
    await this.model.registerUser(user);
    const token = jwtGenerate(user);
    
    return { type: null, message: token };
  };
}

// export default async function registerUser({ username, vocation, level, password }: IUser) {
//   const { type, message } = usersValidation({ username, vocation, level, password });
//   if (type) return { type, message };
//   const userExists = await UsersModel.findUser(username);
//   if (userExists) {
//     return { type: 400, message: MESSAGES.USER_EXISTS };
//   }
//   const newUser = await UsersModel.registerUser({
//     username,
//     vocation,
//     level,
//     password,
//   });
//   console.log(newUser);

//   return { type: 201, message: jwtGenerate({ username, vocation, level, password }) };
// }
// const MESSAGES = {
//   PRODUCT_NOT_FOUND: 'Product not found',
//   UNAUTHORIZED: 'Invalid email or password',
//   USER_EXISTS: 'Username already exists',
//   FORBIDDEN: 'You are not allowed to take this action',
// };