import jwt from 'jsonwebtoken';
import 'express-async-errors';
import 'dotenv/config';
import { Request, Response } from 'express';
import usersService from '../Services/usersService';

const SECRET = process.env.JWT_SECRET || 'secret';

const create = async (req: Request, res: Response) => {
  const { username, vocation, level, password } = req.body;
  const response: number = await usersService.create({ username, vocation, level, password }) || -1;
  const id = response.toString();
  const token = jwt.sign({ id, username }, SECRET, { expiresIn: 600 });
  res.status(201).json({ token });
};

export default {
  create,
};
