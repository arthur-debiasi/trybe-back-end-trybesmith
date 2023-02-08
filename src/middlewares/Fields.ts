import { NextFunction, Request, Response } from 'express';

export default class Fields {
  public login = async (req:Request, res: Response, next: NextFunction) => {
    if (!req.body.username) {
      return res.status(400).json({ message: '"username" is required' });
    }
    if (!req.body.password) { 
      return res.status(400).json({ message: '"password" is required' }); 
    }
    next();
  };

  public products = async (req:Request, res: Response, next: NextFunction) => {
    if (!req.body.name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    if (!req.body.amount) { 
      return res.status(400).json({ message: '"amount" is required' }); 
    }
    next();
  };

  public users = async (req:Request, res: Response, next: NextFunction) => {
    if (!req.body.username) {
      return res.status(400).json({ message: '"username" is required' });
    }
    if (!req.body.vocation) {
      return res.status(400).json({ message: '"vocation" is required' });
    }
    if (!req.body.password) {
      return res.status(400).json({ message: '"password" is required' });
    }
    if (req.body.level === undefined) { 
      return res.status(400).json({ message: '"level" is required' }); 
    }
    next();
  };

  public orders = async (req:Request, res: Response, next: NextFunction) => {
    if (!req.body.productsIds) {
      return res.status(400).json({ message: '"productsIds" is required' });
    }
    next();
  };
}

// export default function loginFields(
//   { body: { username, password } }: Request,
//   res: Response,
//   next: NextFunction,
// ) {
//   if (!username) return res.status(400).json({ message: '"username" is required' });
//   if (!password) return res.status(400).json({ message: '"password" is required' });
//   next();
// }
