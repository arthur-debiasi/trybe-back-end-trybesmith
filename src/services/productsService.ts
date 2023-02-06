// import Jwt from 'jsonwebtoken';
import IProduct from '../interfaces';
import * as productsModel from '../models/productsModel';

// import { config, secret } from '../utils/jwtConfig';

const MESSAGES = {
  USER_NOT_FOUND: 'Product not found',
  // UNAUTHORIZED: 'Invalid email or password',
  USER_EXISTS: 'Product already exists',
  FORBIDDEN: 'You are not allowed to take this action',
};

export async function registerProduct({ name, amount }: IProduct) {
  const userExists = await productsModel.findProduct(name);
  if (userExists) {
    return { type: 400, message: MESSAGES.USER_EXISTS };
  }

  const newProduct = await productsModel.registerProduct({ name, amount });
  // const token = Jwt.sign({ payload }, secret, config);
  // const data = { token, ...payload };
  return { type: 201, message: newProduct };
}

export async function listProducts() {
  const productsList = await productsModel.listProducts();
  // const token = Jwt.sign({ payload }, secret, config);
  // const data = { token, ...payload };
  return { type: 200, message: productsList };
}