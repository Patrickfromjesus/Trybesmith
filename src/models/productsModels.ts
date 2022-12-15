import { ResultSetHeader, RowDataPacket } from 'mysql2';
import Products from '../Interfaces/products';
import connection from './connection';

async function create(infos: Products): Promise<Products> {
  const [data] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)`, Object.values(infos));
  const { insertId } = data;
  return { id: insertId, ...infos }; 
}

const getAll = async () => {
  const [data] = await connection.execute<RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products`);
  return data;
};

export default {
  create,
  getAll,
};
