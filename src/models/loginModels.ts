import { RowDataPacket } from 'mysql2';
import Cadaster from '../Interfaces/cadaster';
import connection from './connection';

const login = async (infos: Cadaster) => {
  const [data] = await connection.execute<RowDataPacket[]>(`
    SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?`, Object.values(infos));
  return data;
};

export default {
  login,
};
