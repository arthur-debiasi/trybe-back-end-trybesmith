import { Request, Response } from 'express';
import LoginService from '../services/LoginService';
// import mapStatus from '../utils/mapStatus';

export default class LoginController {
  private service: LoginService;

  constructor(service: LoginService) {
    this.service = service;
  }

  public login = async (req:Request, res: Response) => {
    const { type, message } = await this.service.login(req.body);
    if (type !== 0) {
      return res.status(type).json({ message });
    }
    res.status(200).json(message);
  };
}

// export default async function login(req: Request, res: Response) {
//   const { type, message } = await LoginService.default(req.body);
//   return res.status(type).json(message);
// }