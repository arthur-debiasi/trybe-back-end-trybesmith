import { IProduct } from '../interfaces';
import * as ProductsModel from '../models/ProductsModel';

// import { config, secret } from '../utils/jwtConfig';

const MESSAGES = {
  PRODUCT_NOT_FOUND: 'Product not found',
  // UNAUTHORIZED: 'Invalid email or password',
  PRODUCT_EXISTS: 'Product already exists',
  FORBIDDEN: 'You are not allowed to take this action',
};

export async function registerProduct({ name, amount }: IProduct) {
  const userExists = await ProductsModel.findProduct(name);
  if (userExists) {
    return { type: 400, message: MESSAGES.PRODUCT_EXISTS };
  }

  const newProduct = await ProductsModel.registerProduct({ name, amount });
  // const token = Jwt.sign({ payload }, secret, config);
  // const data = { token, ...payload };
  return { type: 201, message: newProduct };
}

export async function listProducts() {
  const productsList = await ProductsModel.listProducts();
  // const token = Jwt.sign({ payload }, secret, config);
  // const data = { token, ...payload };
  return { type: 200, message: productsList };
}