import { NextFunction, Request, Response } from 'express';

export default function productsFields(
  { body: { name, amount } }: Request,
  res: Response,
  next: NextFunction,
) {
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (!amount) return res.status(400).json({ message: '"amount" is required' });
  next();
}
