import { IProduct } from '../interfaces';
import ProductsModel from '../models/ProductsModel';
import { productsValidation } from './validations/inputValidation';

export default class ProductsService {
  private model: ProductsModel;

  constructor(model: ProductsModel = new ProductsModel()) {
    this.model = model;
  }

  public listProducts = async (): Promise<IProduct[]> => {
    const products = await this.model.listProducts();
    return products;
  };

  public registerProduct = async (product: IProduct) => {
    const { type, message } = productsValidation(product);
    if (type) return { type, message };
    const insertId = await this.model.registerProduct(product);
    return { type: null, message: { id: insertId, ...product } };
  };
}
