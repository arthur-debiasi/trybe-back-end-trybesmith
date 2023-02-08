import { Request, Response } from 'express';
import UsersService from '../services/UsersService';

export default class UsersController {
  constructor(private service: UsersService = new UsersService()) {}

  public registerUser = async (req:Request, res: Response) => {
    try {
      const { type, message } = await this.service.registerUser(req.body);
      console.log({ type, message });
      if (type) return res.status(type).json({ message });
      return res.status(201).json({ token: message });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Erro interno' });
    }
  };
}

// export default async function registerUser(req: Request, res: Response) {
//   const {
//     body: { username, vocation, level, password },
//   } = req;
//   const { type, message } = await UsersService.default({
//     username,
//     vocation,
//     level,
//     password,
//   });
//   if (type !== 201) return res.status(type).json({ message });
//   return res.status(type).json({ token: message });
// }
