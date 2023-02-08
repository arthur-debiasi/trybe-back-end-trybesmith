import { Pool, RowDataPacket } from 'mysql2/promise';
import { ILogin, IUser } from '../interfaces';
import connection from './connection';

export default class LoginModel {
  constructor(private conn: Pool = connection) {}

  public login = async ({ username, password }:ILogin) => {
    const query = `
    SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?;`;
    const [user] = await this.conn.execute<RowDataPacket[]>(query, [username, password]);
    return user as IUser[];
  };
}

// export default async function login({ username, password }: ILogin) {
//   const [user] = await connection.execute(
//     `SELECT * FROM Trybesmith.users
// WHERE username = ? AND password = ?;`,
//     [username, password],
//   );
//   return JSON.parse(JSON.stringify(user)) as unknown as IUser[];
// }
