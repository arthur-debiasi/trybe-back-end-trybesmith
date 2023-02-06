import { Request, Response } from 'express';
import * as productsService from '../services/productsService';
// import mapStatus from '../utils/mapStatus';

export default async function registerProduct(req: Request, res: Response) {
  const { body: { name, amount } } = req;
  const { type, message } = await productsService.default({ name, amount });
  return res.status(type).json(message);
}
