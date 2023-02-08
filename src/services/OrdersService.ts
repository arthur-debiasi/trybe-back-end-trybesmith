import { IProduct } from '../interfaces';
import OrdersModel from '../models/OrdersModel';
import ProductsModel from '../models/ProductsModel';
import { productsIdsSchema } from './validations/schemas';

export default class OrdersService {
  private ordersModel: OrdersModel;

  private productsModel: ProductsModel;

  constructor(ordersModel: OrdersModel, productsModel: ProductsModel) {
    this.ordersModel = ordersModel;
    this.productsModel = productsModel;
  }

  public listOrders = async () => {
    const orders = await this.ordersModel.listOrders();
    const products = await this.productsModel.listProducts();
  
    const ordersWithProductsIds = orders.map((order) => {
      const productsIds = products
        .filter((product) => product.orderId === order.id).map((e: IProduct) => e.id);       
      return {
        ...order,
        productsIds,
      };
    });
    return ordersWithProductsIds;
  };

  public registerOrders = async (userId: number, productsIds: number[]) => {
    const { error } = productsIdsSchema.validate(productsIds);
    console.log(error);
    
    if (error) return { type: 422, message: error.message };
    const orderId = await this.ordersModel.registerOrder(userId);
    await this.productsModel.updateProducts(productsIds, orderId);
    return { type: 0, message: '' };
  };
}

// export default async function listOrders() {
//   const productsList = await OrdersModel.default();
//   // const token = Jwt.sign({ payload }, secret, config);
//   // const data = { token, ...payload };
//   return { type: 200, message: productsList };
// }
