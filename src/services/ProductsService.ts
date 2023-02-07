import { IProduct } from '../interfaces';
import * as ProductsModel from '../models/ProductsModel';
import { productsValidation } from './validations/inputValidation';

const MESSAGES = {
  PRODUCT_NOT_FOUND: 'Product not found',
  // UNAUTHORIZED: 'Invalid email or password',
  PRODUCT_EXISTS: 'Product already exists',
  FORBIDDEN: 'You are not allowed to take this action',
};

export async function registerProduct({ name, amount }: IProduct) {
  const { type, message } = productsValidation({ name, amount });
  
  if (type) return { type, message };
  const userExists = await ProductsModel.findProduct(name);
  if (userExists) {
    return { type: 400, message: MESSAGES.PRODUCT_EXISTS };
  }

  const newProduct = await ProductsModel.registerProduct({ name, amount });
  return { type: 201, message: newProduct };
}

export async function listProducts() {
  const productsList = await ProductsModel.listProducts();
  return { type: 200, message: productsList };
}