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

  public registerOrders = async (req: Request, res: Response) => {
    const { id } = res.locals.user;
    const { productsIds } = req.body;
    const { type, message } = await this.service.registerOrders(id, productsIds);
    if (type) return res.status(type).json({ message });
    res.status(201).json({ userId: id, productsIds });
  };
}

// export default async function listOrders(_req: Request, res: Response) {
//   const { type, message } = await OrdersService.default();
//   return res.status(type).json(message);
// }
