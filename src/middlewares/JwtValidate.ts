// import { NextFunction, Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import { secret } from '../utils/jwt';
// import UsersModel from '../models/UsersModel';

import { NextFunction, Request, Response } from 'express';
import JwtToken from '../utils/jwt';

export default class JwtValidate {
  private JwtToken: JwtToken;

  constructor() {
    this.JwtToken = new JwtToken();
  }

  public auth = async (req:Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) return res.status(401).json({ message: 'Token not found' });
      const user = this.JwtToken.authenticate(token);
      res.locals.user = user; 
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
}

// export default async function jwtValidate(req:Request, res: Response, next:NextFunction) {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ message: 'Token not found' });
//   try {
//     const result = jwt.verify(token, secret);
//     const { email } = result;

//     req.user = result;
//     next();
//   } catch (err) {
//     return res.status(401).json({
//       message:
//             err.message === 'jwt malformed'
//               ? 'Expired or invalid token'
//               : err.message,
//     });
//   }
// }
