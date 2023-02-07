import { Request, Response } from 'express';
import * as LoginService from '../services/LoginService';
// import mapStatus from '../utils/mapStatus';

export default async function login(req: Request, res: Response) {
  const { type, message } = await LoginService.default(req.body);
  return res.status(type).json(message);
}