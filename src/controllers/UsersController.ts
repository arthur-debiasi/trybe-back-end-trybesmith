import { Request, Response } from 'express';
import * as UsersService from '../services/UsersService';
// import mapStatus from '../utils/mapStatus';

export default async function registerUser(req: Request, res: Response) {
  const {
    body: { username, vocation, level, password },
  } = req;
  const { type, message } = await UsersService.default({
    username,
    vocation,
    level,
    password,
  });
  return res.status(type).json({ token: message });
}
