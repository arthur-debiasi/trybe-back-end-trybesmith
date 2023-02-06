import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import IProduct from '../interfaces';

export async function registerProduct(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: IProduct = { id, name, amount };
  return newProduct;
}

export async function findProduct(name: string): Promise<IProduct | null> {
  const query = 'SELECT * FROM Trybesmith.products WHERE name = ?;';

  const [result] = await connection.execute(query, [name]);
  const [product] = result as IProduct[];
  return product || null;
}

export async function listProducts() {
  const query = 'SELECT * FROM Trybesmith.products;';

  const [result] = await connection.execute(query);
  const productsList = result as IProduct[];
  return productsList || null;
}
