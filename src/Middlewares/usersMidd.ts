import { NextFunction, Request, Response } from 'express';
import User from '../Interfaces/users';
import loginMidd from './loginMidd';
import productsMidd from './productsMidd';

const levelValidate = (level: number, type: string) => {
  if (typeof level !== type) {
    return {
      type: false,
      error: `"level" must be a ${type}`,
    };
  }

  if (level < 1) {
    return { type: false, error: '"level" must be greater than or equal to 1' };
  }
  return { type: true };
};

const validateRequiredFields = (infos: User) => {
  const validateName = loginMidd.validateIndividualField('username', infos);
  if (!validateName.type) {
    return { type: false, error: validateName.error };
  }

  const validateVocation = loginMidd.validateIndividualField('vocation', infos);
  if (!validateVocation.type) {
    return { type: false, error: validateVocation.error };
  }

  const validateLevel = loginMidd.validateIndividualField('level', infos);
  if (!validateLevel.type) {
    return { type: false, error: validateLevel.error };
  }

  const validatePassword = loginMidd.validateIndividualField('password', infos);
  if (!validatePassword.type) {
    return { type: false, error: validatePassword.error };
  }
  return { type: true };
};

const validateRequiredLength = (infos: User) => {
  const validateVocationLength = productsMidd
    .validateLengthAndType(infos.vocation, 3, 'vocation', 'string');
  if (!validateVocationLength.type) {
    return { type: false, error: validateVocationLength.error };
  }

  const validateNameLength = productsMidd
    .validateLengthAndType(infos.username, 3, 'username', 'string');
  if (!validateNameLength.type) {
    return { type: false, error: validateNameLength.error };
  }

  const validatePasswordLength = productsMidd
    .validateLengthAndType(infos.password, 8, 'password', 'string');
  if (!validatePasswordLength.type) {
    return { type: false, error: validatePasswordLength.error };
  }

  return { type: true };
};

const validate = async (req: Request, res: Response, next: NextFunction) => {
  const infos = req.body;

  const validateFildsRequired = validateRequiredFields(infos);
  if (!validateFildsRequired.type) {
    return res.status(400).json(validateFildsRequired.error);
  }

  const validateLengthFields = validateRequiredLength(infos);
  if (!validateLengthFields.type) {
    return res.status(422).json({ message: validateLengthFields.error });
  }

  const validateLevelLength = levelValidate(infos.level, 'number');
  if (!validateLevelLength.type) {
    return res.status(422).json({ message: validateLevelLength.error });
  }
  next();
};

export default {
  validate,
};
