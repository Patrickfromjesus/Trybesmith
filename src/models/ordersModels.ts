import { ResultSetHeader, RowDataPacket } from 'mysql2';
import Order from '../Interfaces/orders';
import connection from './connection';

const getAll = async (): Promise<Order[]> => {
  const [data] = await connection.execute<RowDataPacket[]>(`
    SELECT o.id, o.user_id as 'userId', JSON_ARRAYAGG(p.id) as 'productsIds'
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p
    ON o.id = p.order_id GROUP BY o.id;`);
  return data as Order[];
};

const insertOrder = async (productsIds: number[], orderId: number) => {
  const placeholders = productsIds.map((_e) => '?').join(', ');
  await connection.execute<ResultSetHeader>(`
    UPDATE Trybesmith.products
    SET order_id = ? WHERE id IN (${placeholders})`, [orderId, ...productsIds]);
};

const create = async (productsIds: number[], userId: number): Promise<Order> => {
  const [data] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.orders (user_id) VALUES (?)`, [userId]);
  await insertOrder(productsIds, data.insertId);
  return { userId, productsIds };
};

export default {
  getAll,
  create,
};