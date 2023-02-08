import { ILogin, IUser } from '../interfaces';
import LoginModel from '../models/LoginModel';
import jwtGenerate from './jwtGenerate';

export default class LoginService {
  private model: LoginModel;

  constructor(model: LoginModel) {
    this.model = model;
  }

  public login = async (login: ILogin) => {
    const user = await this.model.login(login);
    if (user.length === 0) {
      return {
        type: 401,
        message: 'Username or password invalid',
      };
    }
    return {
      type: 0,
      message: { token: jwtGenerate(user as unknown as IUser) },
    };
  };
}
// export default async function listOrders(login: ILogin) {
//   const user = await LoginModel.default(login);
//   if (user.length === 0) return { type: 401, message: { message: 'Username or password invalid' } };
//   return { type: 200, message: { token: jwtGenerate(user as unknown as IUser) } };
// }
