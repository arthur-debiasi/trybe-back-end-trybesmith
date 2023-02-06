import * as OrdersModel from '../models/OrdersModel';

export default async function listOrders() {
  const productsList = await OrdersModel.default();
  // const token = Jwt.sign({ payload }, secret, config);
  // const data = { token, ...payload };
  return { type: 200, message: productsList };
}