// import { Request, Response } from 'express';
// import * as OrdersService from '../services/OrdersService';
// import mapStatus from '../utils/mapStatus';

import { Request, Response } from 'express';
import OrdersService from '../services/OrdersService';

export default class OrdersController {
  private service: OrdersService;

  constructor(service: OrdersService) {
    this.service = service;
  }

  public listOrders = async (req: Request, res: Response) => {
    const orders = await this.service.listOrders();
    return res.status(200).json(orders);
  };
}

// export default async function listOrders(_req: Request, res: Response) {
//   const { type, message } = await OrdersService.default();
//   return res.status(type).json(message);
// }
