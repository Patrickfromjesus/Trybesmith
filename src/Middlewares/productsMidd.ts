import { NextFunction, Request, Response } from 'express';
import loginMidd from './loginMidd';

const validateLengthAndType = (value: string, lengthValue: number, key: string, type: string) => {
  if (typeof value !== type) {
    return {
      type: false,
      error: `"${key}" must be a ${type}`,
    };
  }
  if (value.length < lengthValue) {
    return {
      type: false,
      error: `"${key}" length must be at least ${lengthValue} characters long`,
    };
  }
  return { type: true };
};

const validate = async (req: Request, res: Response, next: NextFunction) => {
  const infos = req.body;

  const validateName = loginMidd.validateIndividualField('name', infos);
  if (!validateName.type) {
    return res.status(400).json(validateName.error);
  }

  const validateAmount = loginMidd.validateIndividualField('amount', infos);
  if (!validateAmount.type) {
    return res.status(400).json(validateAmount.error);
  }

  const validateAmountLength = validateLengthAndType(infos.amount, 3, 'amount', 'string');
  if (!validateAmountLength.type) {
    return res.status(422).json({ message: validateAmountLength.error });
  }

  const validateNameLength = validateLengthAndType(infos.name, 3, 'name', 'string');
  if (!validateNameLength.type) {
    return res.status(422).json({ message: validateNameLength.error });
  }
    
  next();
};

export default {
  validate,
  validateLengthAndType,
};
