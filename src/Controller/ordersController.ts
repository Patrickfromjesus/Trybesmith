import { Request, Response } from 'express';
import 'express-async-errors';
import jwt from 'jsonwebtoken';
import ordersService from '../Services/ordersService';
import 'dotenv/config';
import orderMidd from '../Middlewares/orderMidd';

type JWTPayload = {
  id: number;
  username?: string;
};

type Validate = {
  type: boolean;
  error: number;
  message: { message: string };
};

const SECRET = process.env.JWT_SECRET || 'secret';

const getAll = async (_req: Request, res:Response) => {
  const response = await ordersService.getAll();
  res.status(200).json(response);
};

const create = async (req: Request, res: Response) => {
  const { body } = req;
  const token = req.header('Authorization') || 'false';

  if (token === 'false') {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decode = jwt.verify(token, SECRET);
    const validate = orderMidd.validate(body) as Validate;
    if (!validate.type) {
      return res.status(validate.error).json(validate.message);
    }
    const { id } = decode as JWTPayload;
    const response = await ordersService.create(body.productsIds, id);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' }); 
  }
};

export default {
  getAll,
  create,
};
