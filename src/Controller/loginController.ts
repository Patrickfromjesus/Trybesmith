import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import loginService from '../Services/loginService';
import 'dotenv/config';

const SECRET = process.env.JWT_SECRET || 'secret';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const response = await loginService.login({ username, password });
  if (!response.length) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  const token = jwt.sign({ id: response[0].id, username }, SECRET, { expiresIn: 600 });
  return res.status(200).json({ token });
};

export default {
  login,
};
