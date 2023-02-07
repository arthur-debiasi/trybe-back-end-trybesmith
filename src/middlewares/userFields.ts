import { NextFunction, Request, Response } from 'express';

export default function UsersFields(
  { body: { username, vocation, level, password } }: Request,
  res: Response,
  next: NextFunction,
) {
  if (!username) { return res.status(400).json({ message: '"username" is required' }); }
  if (!vocation) { return res.status(400).json({ message: '"vocation" is required' }); }
  if (level === undefined) return res.status(400).json({ message: '"level" is required' });
  if (!password) { return res.status(400).json({ message: '"password" is required' }); }

  next();
}
