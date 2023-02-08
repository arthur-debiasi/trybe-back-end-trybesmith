import { Request, Response } from 'express';
import ProductsService from '../services/ProductsService';
// import * as ProductsService from '../services/ProductsService';
// import mapStatus from '../utils/mapStatus';

export default class ProductsController {
  private service: ProductsService;

  constructor(service: ProductsService) {
    this.service = service;
  }

  public listProducts = async (_req: Request, res: Response) => {
    const products = await this.service.listProducts();
    res.status(200).json(products);
  };

  public registerProducts = async (req:Request, res: Response) => {
    const { type, message } = await this.service.registerProduct(req.body);
    console.log(message);
    
    if (type) return res.status(type).json({ message });
    return res.status(201).json(message);
  };
}

// export async function registerProduct(req: Request, res: Response) {
//   const { body: { name, amount } } = req;
//   const { type, message } = await ProductsService.registerProduct({ name, amount });
//   return res.status(type).json(message);
// }

// export async function listProducts(_req: Request, res: Response) {
//   const { type, message } = await ProductsService.listProducts();
//   return res.status(type).json(message);
// }