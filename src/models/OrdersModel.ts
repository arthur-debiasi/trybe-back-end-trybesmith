import { IProduct } from '../interfaces';
import connection from './connection';

export default async function listOrders() {
  const [orders] = await connection.execute('SELECT id, user_id AS userId FROM Trybesmith.orders;');
  const [products] = await connection.execute(
    'SELECT id, name, amount, order_id AS orderId FROM Trybesmith.products;',
  ); 
  const rawOrders = Object.values(orders).map((e) => ({ ...e }));
  const rawProducts = Object.values(products).map((e) => ({ ...e }));
  const ordersWithProductsIds = rawOrders.map((o) => ({
    ...o,
    productsIds: rawProducts.filter((p) => p.orderId === o.id).map((e: IProduct) => e.id),
  }));
  return ordersWithProductsIds || null;
}
