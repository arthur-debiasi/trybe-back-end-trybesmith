import { ILogin } from '../interfaces';
import LoginModel from '../models/LoginModel';
import JwtToken from '../utils/jwt';

export default class LoginService {
  private model: LoginModel;

  private jwtToken: JwtToken;

  constructor(model: LoginModel) {
    this.model = model;
    this.jwtToken = new JwtToken();
  }

  public login = async (login: ILogin) => {
    const [user] = await this.model.login(login);
    if (!user) {
      return {
        type: 401,
        message: 'Username or password invalid',
      };
    }
    return {
      type: 0,
      message: { token: this.jwtToken.generate({ ...user }) },
    };
  };
}
// export default async function listOrders(login: ILogin) {
//   const user = await LoginModel.default(login);
//   if (user.length === 0) return { type: 401, message: { message: 'Username or password invalid' } };
//   return { type: 200, message: { token: jwtGenerate(user as unknown as IUser) } };
// }
