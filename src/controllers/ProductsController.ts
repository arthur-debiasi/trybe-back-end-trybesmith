import { Request, Response } from 'express';
import * as ProductsService from '../services/ProductsService';
// import mapStatus from '../utils/mapStatus';

export async function registerProduct(req: Request, res: Response) {
  const { body: { name, amount } } = req;
  const { type, message } = await ProductsService.registerProduct({ name, amount });
  return res.status(type).json(message);
}

export async function listProducts(_req: Request, res: Response) {
  const { type, message } = await ProductsService.listProducts();
  return res.status(type).json(message);
}