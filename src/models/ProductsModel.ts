import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
// import connection from './connection';
import { IProduct } from '../interfaces';

export default class ProductsModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public listProducts = async (): Promise<IProduct[]> => {
    const query = 'SELECT id, name, amount, order_id as orderId FROM Trybesmith.products;';
    const [products] = await this.connection.execute(query);
    return products as IProduct[];
  };

  public findProductByName = async (name: string): Promise<RowDataPacket[] | IProduct> => {
    const query = 'SELECT * FROM Trybesmith.products WHERE name = ?;';
    const [product] = await this.connection.execute(query, [name]);
    return product as RowDataPacket[] | IProduct;
  };

  public registerProduct = async (product : IProduct) => {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    return insertId;
  };

  public updateProducts = async (productsIds : number[], orderId: number) => {
    const query = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
    const promises = productsIds.map((e) => this.connection.execute(query, [orderId, e]));
    Promise.all(promises);
  };
}

// export async function registerProduct(product: IProduct): Promise<IProduct> {
//   const { name, amount } = product;

//   const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
//   const values = [name, amount];

//   const [result] = await connection.execute<ResultSetHeader>(query, values);
//   const { insertId: id } = result;

//   const newProduct: IProduct = { id, name, amount };
//   return newProduct;
// }

// export async function findProduct(name: string): Promise<IProduct | null> {
//   const query = 'SELECT * FROM Trybesmith.products WHERE name = ?;';

//   const [result] = await connection.execute(query, [name]);
//   const [product] = result as IProduct[];
//   return product || null;
// }

// export async function listProducts() {
//   const query = 'SELECT * FROM Trybesmith.products;';

//   const [result] = await connection.execute(query);
//   const productsList = result as IProduct[];
//   return productsList || null;
// }