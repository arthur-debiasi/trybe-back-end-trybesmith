import { Pool } from 'mysql2/promise';
import connection from './connection';
import { IUser } from '../interfaces';

export default class UsersModel {
  private connection: Pool;

  constructor(conn: Pool = connection) {
    this.connection = conn;
  }

  public findUser = async (username: string) => {
    const query = 'SELECT * FROM Trybesmith.users WHERE username = ?;';
    const [user] = await this.connection.execute(query, [username]);
    console.log(user);
    
    return user as IUser[];
  };

  public registerUser = async (user: IUser) => {
    const { username, vocation, level, password } = user;
    const query = `
    INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
    await this.connection.execute(query, [
      username,
      vocation,
      level,
      password,
    ]);
  };
}

// export async function findUser(username: string): Promise<IUser | null> {
//   const query = 'SELECT * FROM Trybesmith.users WHERE username = ?;';

//   const [result] = await connection.execute(query, [username]);
//   const [product] = result as IUser[];
//   return product || null;
// }

// export async function registerUser(user: IUser): Promise<IUser> {
//   const {
//     username,
//     vocation,
//     level,
//     password,
//   } = user;

//   const query = `
//   INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
//   const values = [username, vocation, level, password];

//   const [result] = await connection.execute<ResultSetHeader>(query, values);
//   const { insertId: id } = result;

//   const newProduct: IUser = { id, username, vocation, level, password };
//   return newProduct;
// }
