import { NextFunction, Request, Response } from 'express';

export default function loginFields(
  { body: { username, password } }: Request,
  res: Response,
  next: NextFunction,
) {
  if (!username) return res.status(400).json({ message: '"username" is required' });
  if (!password) return res.status(400).json({ message: '"password" is required' });
  next();
}
