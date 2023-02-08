import { IProduct } from '../interfaces';
import ProductsModel from '../models/ProductsModel';
// import * as ProductsModel from '../models/ProductsModel';
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
    // const userExists = await this.model.findProductByName(product.name);
    // if (userExists) {
    //   return { type: 400, message: 'Product already exists' };
    // }
    return { type: null, message: { id: insertId, ...product } };
  };
}

// const MESSAGES = {
//   PRODUCT_NOT_FOUND: 'Product not found',
//   // UNAUTHORIZED: 'Invalid email or password',
//   PRODUCT_EXISTS: 'Product already exists',
//   FORBIDDEN: 'You are not allowed to take this action',
// };

// export async function registerProduct({ name, amount }: IProduct) {
//   const { type, message } = productsValidation({ name, amount });

//   if (type) return { type, message };
//   const userExists = await ProductsModel.findProduct(name);
//   if (userExists) {
//     return { type: 400, message: MESSAGES.PRODUCT_EXISTS };
//   }

//   const newProduct = await ProductsModel.registerProduct({ name, amount });
//   return { type: 201, message: newProduct };
// }

// export async function listProducts() {
//   const productsList = await ProductsModel.listProducts();
//   return { type: 200, message: productsList };
// }
