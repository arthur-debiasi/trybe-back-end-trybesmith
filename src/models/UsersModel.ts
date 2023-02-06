import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { IUser } from '../interfaces';

export async function registerUser(user: IUser): Promise<IUser> {
  const {
    username,
    vocation,
    level,
    password,
  } = user;

  const query = `
  INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: IUser = { id, username, vocation, level, password };
  return newProduct;
}

export async function findUser(username: string): Promise<IUser | null> {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ?;';

  const [result] = await connection.execute(query, [username]);
  const [product] = result as IUser[];
  return product || null;
}