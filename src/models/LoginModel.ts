import { ILogin, IUser } from '../interfaces';
import connection from './connection';

export default async function login({ username, password }: ILogin) {
  const [user] = await connection.execute(
    `SELECT * FROM Trybesmith.users
WHERE username = ? AND password = ?;`,
    [username, password],
  );
  return JSON.parse(JSON.stringify(user)) as unknown as IUser[];
}
