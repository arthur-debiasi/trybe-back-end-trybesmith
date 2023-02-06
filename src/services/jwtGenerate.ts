import Jwt from 'jsonwebtoken';
import { config, secret } from '../utils/jwtConfig';
import { IUser } from '../interfaces';

export default (payload: IUser) => {
  const token = Jwt.sign({ payload }, secret, config);
  return token;
};
