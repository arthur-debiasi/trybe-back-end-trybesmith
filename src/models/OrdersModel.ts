import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IOrder } from '../interfaces';

export default class OrdersModel {
  // private connection: Pool;

  // constructor(conn: Pool) {
  //   this.connection = conn;
  // }
  constructor(private conn: Pool = connection) {}

  public listOrders = async (): Promise<IOrder[]> => {
    const query = 'SELECT id, user_id AS userId FROM Trybesmith.orders;';
    const [orders] = await this.conn.execute(query);
    return orders as IOrder[];
  };

  public registerOrder = async (userId:number): Promise<number> => {
    const query = 'INSERT INTO Trybesmith.orders (user_id) VALUE (?);';
    const [{ insertId }] = await this.conn.execute<ResultSetHeader>(query, [userId]);
    return insertId;
  };
}
// export default async function listOrders() {
//   const [orders] = await connection.execute('SELECT id, user_id AS userId FROM Trybesmith.orders;');
//   const [products] = await connection.execute(
//     'SELECT id, name, amount, order_id AS orderId FROM Trybesmith.products;',
//   ); 
//   const rawOrders = Object.values(orders).map((e) => ({ ...e }));
//   const rawProducts = Object.values(products).map((e) => ({ ...e }));
//   const ordersWithProductsIds = rawOrders.map((o) => ({
//     ...o,
//     productsIds: rawProducts.filter((p) => p.orderId === o.id).map((e: IProduct) => e.id),
//   }));
//   return ordersWithProductsIds || null;
// }
