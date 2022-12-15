import { NextFunction, Request, Response } from 'express';

const validateIndividualField = (field: string, body: object) => {
  if (!Object.keys(body).includes(field)) {
    return { type: false, error: { message: `"${field}" is required` } };
  }
  return { type: true };
};

const validateFields = async (req: Request, res: Response, next: NextFunction) => {
  const infos = req.body;
  const validateUsername = validateIndividualField('username', infos);
  if (!validateUsername.type) {
    return res.status(400).json(validateUsername.error);
  }
  const validatePassword = validateIndividualField('password', infos);
  if (!validatePassword.type) {
    return res.status(400).json(validatePassword.error);
  }
  next();
};

export default {
  validateFields,
  validateIndividualField,
};
