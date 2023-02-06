import { Request, Response } from 'express';
import * as OrdersService from '../services/OrdersService';
// import mapStatus from '../utils/mapStatus';

export default async function listOrders(_req: Request, res: Response) {
  const { type, message } = await OrdersService.default();
  return res.status(type).json(message);
}
