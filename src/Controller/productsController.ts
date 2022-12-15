import { Request, Response } from 'express';
import productsService from '../Services/productsService';
import 'express-async-errors';

async function create(req: Request, res: Response) {
  const { name, amount } = req.body;
  const result = await productsService.create({ name, amount });
  return res.status(201).json(result);
}

const getAll = async (_req: Request, res: Response) => {
  const response = await productsService.getAll();
  return res.status(200).json(response);
};

export default {
  create,
  getAll,
};
