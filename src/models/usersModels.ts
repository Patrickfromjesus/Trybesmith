import { ResultSetHeader } from 'mysql2';
import User from '../Interfaces/users';
import connection from './connection';

const create = async (infos: User): Promise<User> => {
  const [data] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`, Object.values(infos));
  const { insertId } = data;
  return { id: insertId, ...infos };
};

export default {
  create,
};
